# Max!! Portfolio Refactor

The original single-page React component is split into editable modules.

```text
src/
├── App.tsx
├── components/
│   ├── AboutSection.tsx
│   ├── FloatingPill.tsx
│   ├── Footer.tsx
│   ├── HomeSection.tsx
│   ├── Nav.tsx
│   ├── PageDoodles.tsx
│   ├── PillBtn.tsx
│   ├── ProfilesSection.tsx
│   ├── ProjectsSection.tsx
│   └── SectionHead.tsx
├── config/
│   ├── assets.ts
│   └── theme.ts
├── data/
│   ├── profiles.ts
│   └── projects.ts
└── styles/
    └── tokens.css
tailwind.config.ts
```

Edit colors/shadows in `tailwind.config.ts` or `src/config/theme.ts`.
Edit projects in `src/data/projects.ts` and social links in `src/data/profiles.ts`.
