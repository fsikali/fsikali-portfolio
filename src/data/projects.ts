export type Project = {
  id: string;
  title: string;
  description: string;
  featured?: boolean;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "skincare-store",
    title: "Skincare Store",
    description:
      "Full-stack ecommerce platform for skincare products with cart and checkout system",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "Modern portfolio built with Next.js App Router, SEO optimization, and reusable components.",
    featured: true,
  },
  {
    id: "dashboard",
    title: "Booking System",
    description:
      "Scalable booking system with real-time availability, user authentication, and admin dashboard",
  },
  {
    id: "live-news-feed",
    title: "Live News Feed",
    description:
      "Real-time news feed system delivering continuously updated content with scalable architecture",
  },
  {
    id: "fstechspace-framework",
    title: "Mini Framework",
    description:
      "Lightweight backend framework built with Node.js for scalable server architecture design",
  },
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    description:
      "Real-time chat system built with Spring Boot WebSocket scalable architecture messaging",
  },
];
