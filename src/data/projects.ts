export type Project = {
  id: string;
  title: string;
  description: string;
  github: string;
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "ai-chat-app",
    title: "AI Chat App",
    description:
      "Full-stack AI chat application with streaming responses and API integration.",
    github: "https://github.com/yourname/ai-chat-app",
    tech: ["Next.js", "OpenAI", "Tailwind"],
    featured: true,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "Modern portfolio built with Next.js App Router, SEO optimization, and reusable components.",
    github: "https://github.com/fsikali/fsikali-portfolio",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description:
      "Admin dashboard with charts, analytics, and real-time data visualization.",
    github: "https://github.com/yourname/dashboard",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    id: "news-feed",
    title: "Real-time News Feed",
    description:
      "Live news aggregation system with filtering and trending topics.",
    github: "https://github.com/yourname/news-feed",
    tech: ["Next.js", "API Routes", "WebSockets"],
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "Productivity app with drag-and-drop tasks and authentication system.",
    github: "https://github.com/yourname/task-manager",
    tech: ["Next.js", "Auth", "Database"],
  },
  {
    id: "ai-terminal",
    title: "AI Terminal Assistant",
    description:
      "CLI-based AI tutor with voice output and interactive commands.",
    github: "https://github.com/yourname/ai-terminal",
    tech: ["Node.js", "Edge-TTS", "CLI"],
  },
];
