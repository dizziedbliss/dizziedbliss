export type Project = {
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  /** omit for private repos, so visitors never hit a 404 */
  repo?: string;
  /** shut down or personal: shows the "cat yoinked the link" cat instead of buttons and screenshots */
  gone?: boolean;
  /** live demo link, shown next to the GitHub button when present */
  live?: string;
  /** screenshots; the cat-in-a-box picture is shown when there are none */
  images?: { src: string; alt: string }[];
  /** shown under the name */
  stack?: string[];
  details?: string[];
  /** a word in the description that reveals extra info on hover */
  term?: { word: string; info: string };
};

export const ALL_PROJECTS: Project[] = [
  {
    slug: "skillissues",
    name: "SkillIssues",
    tagline: "Open-Source Contribution Platform",
    description:
      "A platform that collects open issues from active public GitHub repositories, matches them to your languages, skills and level, and awards XP when a pull request of yours gets merged. It ships as a web app and an Electron desktop app, backed by a Go API and ingestion services on Postgres.",
    repo: "https://github.com/dizziedbliss/SkillIssues",
    live: "https://skillissues.dizziedbliss.lol",
    stack: [
      "React",
      "Go",
      "Postgres",
      "Redis",
      "Electron",
      "Docker",
      "Vercel",
      "Prometheus",
      "Grafana",
    ],
    images: [
      { src: "/projects/skillissues/landing.png", alt: "The SkillIssues landing page" },
      { src: "/projects/skillissues/explore.png", alt: "Explore: beginner issues from real repositories" },
      { src: "/projects/skillissues/issue.png", alt: "An issue page with a good-place-to-start checklist" },
      { src: "/projects/skillissues/contributions.png", alt: "Contributions: pull requests earning XP" },
      { src: "/projects/skillissues/profile.png", alt: "A profile with level, XP and activity" },
    ],
  },
  {
    slug: "skillissues-flow",
    name: "SkillIssues Flow",
    tagline: "Real-time 3D data-flow map",
    description:
      "Catches events off the SkillIssues stream and shows them moving in 3D.",
    details: [
      "Anything tied to a signed-in user arrives already redacted and is drawn in red. Transparency, taken personally.",
    ],
    live: "https://flow.dizziedbliss.lol",
    stack: ["TypeScript", "Vite", "Server-Sent Events", "Vercel"],
    images: [
      { src: "/projects/skillissues-flow/map.png", alt: "The live system map: dot clouds for each container, linked by traffic" },
      { src: "/projects/skillissues-flow/ingestd.png", alt: "The record drawer open on ingestd, the GitHub crawler" },
      { src: "/projects/skillissues-flow/flowd.png", alt: "The record drawer open on flowd, which relays the stream" },
    ],
  },
  {
    slug: "meowance",
    name: "Meowance",
    tagline: "Attendance survival kit",
    description:
      "meow + attendance. Log in with your USN and birthday and it pulls your attendance off the college portal, then tells you how many classes you have to attend (or can still skip) to stay out of the fine zone. It also shows this week's timetable, your CIE marks, past sems' grades and the semester calendar.",
    details: [
      "Every class is a box in real order: filled means pawsent, hollow means bunked, orange is what you still owe. Tap a course to see exactly when you bunked.",
      "A Go function on Vercel logs into the portal for you, scrapes it and does the bunk math. Nothing is stored on the server; the browser keeps your login encrypted with WebCrypto.",
      "Under 75% you're dead, 75 to 85 you pay a fine, 85+ you're purring.",
    ],
    term: {
      word: "CIE",
      info: "Continuous internal evaluation: the internal tests through the semester.",
    },
    repo: "https://github.com/dizziedbliss/meowance",
    live: "https://meowance.vercel.app",
    stack: ["Go", "React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    images: [
      { src: "/projects/meowance/dashboard.webp", alt: "The dashboard: the worst course up top with the classes left to attend" },
      { src: "/projects/meowance/login.webp", alt: "The login page" },
    ],
  },
  {
    slug: "veryjudgycat",
    name: "VeryJudgyCat",
    tagline: "LeetCode-style judge for n8n workflows",
    description:
      "Built for the Automathon 2.0 hackathon. Teams upload an exported n8n workflow and the judge runs it in a fresh, throw-away n8n container against hidden tests, then shows a verdict per sample test and how many hidden tests passed.",
    details: [
      "Telegram, Google Calendar, Sheets and Gmail are faked inside the judge network, so tests never message real people. Checks are exact or graded by an LLM against a rubric, and grader outages are refunded, never scored as zero.",
      "One Go binary runs the site, the test machines and the organiser tools. Workers only make outbound calls, so lab PCs behind NAT can join.",
    ],
    repo: "https://github.com/dizziedbliss/meow-pspsps",
    stack: ["Go", "n8n", "Docker", "SQLite", "LLM grading", "Cloudflare Tunnel"],
    images: [
      { src: "/projects/meow-pspsps/team-page.png", alt: "A team's page: problem statement, workflow upload and score" },
      { src: "/projects/meow-pspsps/leaderboard.png", alt: "The public live leaderboard" },
    ],
  },
  {
    slug: "winter",
    name: "Winter",
    tagline: "Deployment Platform",
    description:
      "CLI-based deployment platform automating Docker application workflows through a single winter deploy command; automatically discovers projects, validates Dockerfiles, and executes image builds with an interactive terminal UI for build status and errors.",
    repo: "https://github.com/dizziedbliss/winter",
    stack: ["Go", "Bubble Tea", "Docker", "GoReleaser"],
  },
  {
    slug: "yorozuya",
    name: "Yorozuya",
    tagline: "Job Discovery Platform",
    description:
      "My own job portal, built because I hated LinkedIn. It pulled listings from Greenhouse for a few favourite companies and only showed the SRE and DevOps-ish roles.",
    details: [
      "A FastAPI backend on Railway and a React frontend on Vercel, both shipped with Docker.",
    ],
    repo: "https://github.com/dizziedbliss/yorozuya",
    stack: ["FastAPI", "React", "Tailwind CSS", "Docker", "Railway", "Vercel"],
  },
  {
    slug: "miku",
    name: "Miku",
    tagline: "Discord Bot",
    description:
      "A personal Discord bot that embedded Pinterest pics and vids right in chat. I made it because I was bored. It ran on Railway.",
    gone: true,
    stack: ["Python", "Hikari", "Railway"],
  },
  {
    slug: "idp",
    name: "IDP",
    tagline: "Guide allocation system",
    description:
      "Our uni needed a way to register interdisciplinary project teams and allocate faculty guides, so I built it. Around 900 students used it for registrations.",
    details: [
      "Students made a team, picked a domain and ranked their guide preferences, and allocation was fair and capacity-aware.",
    ],
    repo: "https://github.com/dizziedbliss/Guidehub",
    stack: ["React", "Supabase", "Vercel"],
    images: [{ src: "/projects/idp/login.png", alt: "The team leader login page" }],
  },
  {
    slug: "hiring-2k25",
    name: "Hiring Promo Website",
    tagline: "MERIISE Hiring 2k25",
    description:
      "A website that made registration easy and showed how many people wanted to join MERIISE.",
    details: [
      "The theme was Pokémon. People collected Pokémon cards as their registration promo, so they could use them for priority interviews.",
    ],
    term: {
      word: "MERIISE",
      info: "The e-cell and section-8 company of our uni.",
    },
    repo: "https://github.com/pgyunknown/hiring2k25",
    stack: ["React", "Vercel"],
  },
  {
    slug: "frisk",
    name: "Frisk",
    tagline: "My first Discord bot",
    description:
      "The bot where I learnt Discord botting. It was Undertale inspired and had fun features like playing songs in voice. It ran on Railway and has been shut down since.",
    gone: true,
    stack: ["Python", "Hikari", "Lavalink", "Railway"],
  },
];
