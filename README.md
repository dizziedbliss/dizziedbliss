# Max!! — portfolio

Dark, noisy, Schrödinger-flavoured portfolio. React 19 + Vite + Tailwind v4, no router dependency.

```text
src/
├── App.tsx                  shell: nav, page switch, footer
├── router.tsx               hash router + page-transition timeline (intro / enter / leave)
├── components/
│   ├── Cat.tsx              traced cat silhouette: "fill" (intro), "alive", "dead" (halo + X eyes)
│   ├── Curtain.tsx          the sliding screen with the cat and loading bar
│   ├── Reveal.tsx           slide-up / wipe-in on scroll (no opacity fades)
│   ├── Nav.tsx, Footer.tsx
│   └── HomeSection.tsx, ProjectsSection.tsx, AboutSection.tsx
├── pages/                   HomePage, ProjectPage (/project/:slug), ContactPage (/contact)
├── data/
│   ├── projects.ts          add slug/name/tagline/description/repo (+ optional image, stack, details)
│   └── profiles.ts          email + social links for the contact page
└── styles/tokens.css        colours, fonts, noise, buttons, curtain and cat keyframes
```

Routes are hash based (`#/project/winter`), so deep links work on any static host.
Transition timings live at the top of `src/router.tsx` (keep `ENTER_MS`/`LEAVE_MS` in sync with
`--curtain-ms` in `tokens.css`). The cat is alive on the first page switch, dead on the next, and so on.
