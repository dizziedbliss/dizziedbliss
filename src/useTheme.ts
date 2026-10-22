import { useCallback, useState } from "react";

export type Theme = "dark" | "light";

const THEME_COLOR: Record<Theme, string> = { dark: "#0c0c0b", light: "#e7e1d3" };

/** Dark first. The choice is saved in localStorage and applied pre-paint by a script in index.html. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[next]);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // private mode: the toggle still works for this visit
    }
    setTheme(next);
  }, [theme]);

  return { theme, toggle };
}
