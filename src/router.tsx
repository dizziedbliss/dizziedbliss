import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Curtain, type CurtainKind, type CurtainPhase } from "@/components/Curtain";

// Tunables for the page-transition timeline (ms). Keep ENTER/LEAVE in sync with --curtain-ms.
const INTRO_MS = 2600;
const ENTER_MS = 550;
const HOLD_MS = 650;
const LEAVE_MS = 550;

type NavigateOptions = { section?: string; push?: boolean };

type RouterValue = {
  path: string;
  navigate: (to: string, options?: NavigateOptions) => void;
};

const RouterContext = createContext<RouterValue | null>(null);

const readPath = () => window.location.hash.replace(/^#/, "") || "/";

function scrollToSection(id: string | undefined, behavior: ScrollBehavior) {
  if (!id) return window.scrollTo({ top: 0, behavior });
  document.getElementById(id)?.scrollIntoView({ behavior });
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used inside <RouterProvider>");
  return ctx;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readPath);
  const [phase, setPhase] = useState<CurtainPhase>("intro");
  const [kind, setKind] = useState<CurtainKind>("intro");
  const [runId, setRunId] = useState(0);

  const pathRef = useRef(path);
  const busy = useRef(true);
  const navCount = useRef(0);

  const navigate = useCallback((to: string, { section, push = true }: NavigateOptions = {}) => {
    if (to === pathRef.current) {
      scrollToSection(section, "smooth");
      return;
    }
    if (busy.current) return;
    busy.current = true;

    // alive on the first page switch, dead on the next, and so on
    setKind(navCount.current++ % 2 === 0 ? "alive" : "dead");
    setRunId((n) => n + 1);
    setPhase("enter");

    window.setTimeout(() => {
      if (push) window.history.pushState(null, "", `#${to}`);
      pathRef.current = to;
      setPath(to);
      window.scrollTo(0, 0);
      setPhase("leave");
      if (section) window.setTimeout(() => scrollToSection(section, "auto"), 60);

      window.setTimeout(() => {
        setPhase("idle");
        busy.current = false;
        // a back/forward press that landed mid-transition
        if (readPath() !== pathRef.current) navigate(readPath(), { push: false });
      }, LEAVE_MS);
    }, ENTER_MS + HOLD_MS);
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const onPop = () => navigate(readPath(), { push: false });
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [navigate]);

  useEffect(() => {
    const leave = window.setTimeout(() => setPhase("leave"), INTRO_MS);
    const done = window.setTimeout(() => {
      setPhase("idle");
      busy.current = false;
    }, INTRO_MS + LEAVE_MS);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
      <Curtain phase={phase} kind={kind} runId={runId} duration={ENTER_MS + HOLD_MS} />
    </RouterContext.Provider>
  );
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  section?: string;
};

export function Link({ to, section, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    navigate(to, { section });
  };

  return <a href={`#${to}`} onClick={handleClick} {...rest} />;
}
