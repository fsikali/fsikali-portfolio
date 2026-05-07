export type Project = {
  id: string;
  title: string;
  description: string;
  github: string;
  tech: string[];
  featured?: boolean;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "skincare-store",
    title: "Skincare Store",
    description:
      "Full-stack ecommerce platform for skincare products with cart and checkout system",
    github: "https://github.com/fsikali/sela-essence",
    tech: ["Next.js", "NestJS", "PostgreSQL"],
    featured: true,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "Modern portfolio built with Next.js App Router, SEO optimization, and reusable components.",
    github: "https://github.com/fsikali/fsikali-portfolio",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    featured: true,
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description:
      "Data analytics dashboard visualizing real-time metrics through API-driven backend architecture",
    github: "https://github.com/fsikali/fstechspace-analytics-dashboard",
    tech: ["Spring Boot", "Apache Spark", "React"],
  },
  {
    id: "live-news-feed",
    title: "Live News Feed",
    description:
      "Real-time news feed system delivering continuously updated content with scalable architecture",
    github: "https://github.com/fsikali/fstechspace-live-news",
    tech: ["Next.js", "Socket.io", "MongoDB"],
  },
  {
    id: "fstechspace-framework",
    title: "Mini Framework",
    description:
      "Lightweight backend framework built with Node.js for scalable server architecture design",
    github: "https://github.com/fsikali/fs-framework",
    tech: ["Node.js", "HTTP Core", "Middleware"],
  },
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    description:
      "Real-time chat system built with Spring Boot WebSocket scalable architecture messaging",
    github: "https://github.com/fsikali/fstechspace-realtime-chat",
    tech: ["Spring Boot", "WebSocket", "Redis"],
  },
];
