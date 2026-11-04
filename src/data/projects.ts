export type Project = {
  id: string;
  title: string;
  description: string;
  featured?: boolean;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "fs-portfolio",
    title: "Personal Portfolio",
    description:
      "Modern portfolio built with Next.js App Router, SEO optimization, and reusable components.",
    featured: true,
  },
  {
    id: "fs-store",
    title: "E-commerce Store",
    description:
      "Scalable e-commerce store built with Next.js, featuring product catalog, shopping cart, and checkout system.",
    featured: true,
  },
  {
    id: "restaurant-booking-system",
    title: "Restaurant Booking System",
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
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Comprehensive analytics dashboard for visualizing and interpreting data sets with interactive charts and graphs",
  },
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    description:
      "Real-time chat system built with Spring Boot WebSocket scalable architecture messaging",
  },
];
