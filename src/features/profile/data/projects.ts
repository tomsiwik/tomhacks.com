import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "chanhdaidotcom",
    title: "chanhdai.com",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/ncdai/chanhdai.com",
    skills: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description: `chanhdai.com is my portfolio website, showcasing my work and experience as a Software Developer & UI/UX Designer.
- Elegant & Minimalistic UI: Clean and modern design
- Dark Mode: Supports light and dark themes for a better user experience
- vCard Integration: Digital business card with contact details
- SEO Optimization: [JSON-LD](https://json-ld.org) schema, sitemap, robots
- AI-friendly [/llms.txt](https://llmstxt.org): Adds a \`/llms.txt\` file to help AI models identify and interact with site content.
- Email Protection: Obfuscation to prevent spam
- Installable PWA
- Next.js 15: Latest React framework for optimized performance and scalability
- Tailwind CSS v4: Modern utility-first CSS framework for styling

Blog Features:
- MDX & Markdown support
- Syntax Highlighting for better readability
- RSS Feed for easy content distribution
- Dynamic OG Images for rich previews`,
    logo: "https://assets.tomhacks.com/images/project-logos/chanhdaidotcom.svg",
    isExpanded: true,
  },
];
