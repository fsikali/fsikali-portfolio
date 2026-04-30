import { Code2, Link, Mail, Code, Code2Icon } from "lucide-react";

/**
 * Centralized icon system (BEST PRACTICE)
 * - Prevents import/version issues
 * - Makes UI scalable like SaaS apps
 * - Single source of truth for icons
 */
export const Icons = {
  code: Code2,
  link: Link,
  mail: Mail,
  github: Code,
  linkedin: Code2Icon
};
