export interface Project {
  title: string;
  description: string;
  year: string;
  tags: string[];
  url?: string;
  repo?: string;
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
}

export interface Highlight {
  title: string;
  subtitle: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  role: string;
  location?: string;
  availability?: string;
  tagline: string;
  about: {
    intro: string;
    paragraphs: string[];
    highlights: Highlight[];
    focusAreas: string[];
  };
  projects: Project[];
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "Ben Fourie",
  domain: "benfourie.com",
  url: "https://www.benfourie.com",
  role: "Full-Stack Software Developer & Engineering Leader",
  tagline:
    "Modernising software, solving complex problems, and building tools that keep developers in the flow.",
  about: {
    intro:
      "I'm a full-stack web application and software developer with extensive engineering and leadership experience. I love modernising, refactoring, and testing code while solving complex problems and making teams more productive.",
    paragraphs: [
      "Across my day-to-day work and side projects, I gravitate toward fast, keyboard-first developer tools, desktop utilities, and clean web applications, mostly written in .NET/C#, Go, and TypeScript.",
      "Outside of software, I'm a tinkerer at heart, a husband and father, and a long-distance road and trail runner.",
    ],
    highlights: [
      {
        title: "Development",
        subtitle: "Writing & modernising code",
        description:
          "Building full-stack applications and developer tooling in .NET, Go, and TypeScript, with a focus on clean architecture and maintainability.",
      },
      {
        title: "Tinkering",
        subtitle: "Casually improving everyday workflows",
        description:
          "Dabbling in desktop utilities, CLIs, gadgets, electronics, and small automations that remove friction from daily life.",
      },
      {
        title: "Running",
        subtitle: "Moving far on roads & trails",
        description:
          "I run far, really far. Training for and racing epic ultra-distance road and trail running events.",
      },
      {
        title: "Family",
        subtitle: "Husband & father",
        description:
          "Enjoying home life and everything that comes with it.",
      },
    ],
    focusAreas: [
      ".NET & C#",
      "TypeScript & React",
      "Go",
      "Developer Tooling & CLIs",
      "Code Modernisation & Refactoring",
      "Engineering Leadership",
    ],
  },
  projects: [
    {
      title: "Oak",
      description:
        "A modern, keyboard-friendly Git GUI for Windows (with experimental Linux support), designed for speed and clarity.",
      year: "2026",
      tags: ["Windows", "Git GUI", "TypeScript"],
      url: "https://www.benfourie.com/oak/",
      repo: "https://github.com/benfo/oak",
      featured: true,
    },
    {
      title: "syscope",
      description:
        "A terminal task manager that explains what your system is doing: processes, performance, GPU, and ports, on Windows, Linux, and macOS.",
      year: "2026",
      tags: ["Go", "TUI", "Cross-Platform", "System Monitor"],
      repo: "https://github.com/benfo/syscope",
      featured: true,
    },
    {
      title: "Calendar for Command Palette",
      description:
        "A Microsoft PowerToys Command Palette extension that shows your daily schedule and lets you join Teams, Zoom, Meet, or Webex meetings in a single keystroke.",
      year: "2026",
      tags: ["C#", ".NET", "PowerToys", "Windows"],
      repo: "https://github.com/benfo/cmdpal-calendar",
      featured: true,
    },
    {
      title: "browser-router",
      description:
        "Set it as your default browser on Windows, macOS, or Linux to automatically route and open each URL in the specific browser or profile you choose by rule.",
      year: "2026",
      tags: ["Go", "Cross-Platform", "CLI"],
      repo: "https://github.com/benfo/browser-router",
      featured: true,
    },
    {
      title: "flow",
      description:
        "A keyboard-driven terminal dashboard for developers to browse Jira tasks, update statuses, and manage linked Git branches without leaving the terminal.",
      year: "2026",
      tags: ["Go", "TUI", "Jira", "Git"],
      repo: "https://github.com/benfo/flow",
      featured: true,
    },
    {
      title: "QR Code Generator",
      description:
        "A fast, free, client-side QR code generator web app with zero tracking or clutter.",
      year: "2024",
      tags: ["TypeScript", "React", "Vite"],
      url: "https://www.benfourie.com/qr/",
      repo: "https://github.com/benfo/qr",
      featured: false,
    },
    {
      title: "aunit",
      description:
        "A lightweight unit testing library built for AutoHotkey scripts and automation suites.",
      year: "2020",
      tags: ["AutoHotkey", "Testing"],
      repo: "https://github.com/benfo/aunit",
      featured: false,
    },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/benfo",
      handle: "@benfo",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/benfourie",
      handle: "in/benfourie",
    },
    {
      label: "X / Twitter",
      href: "https://x.com/benfourie",
      handle: "@benfourie",
    },
  ],
};
