import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "nerdbooksdotnet",
    title: "nerdbooks.net",
    period: {
      start: "05.2025",
    },
    link: "https://nerdbooks.net",
    skills: [
      "Tailwind CSS v4",
      "Vercel AI SDK",
      "SvelteKit",
      "shadcn/ui",
      "Vercel",
    ],
    description: `nerdbooks.net - smart agent.
- Elegant & Minimalistic UI: Clean and modern design
- vCard Integration: Digital business card with contact details
- SEO Optimization: [JSON-LD](https://json-ld.org) schema, sitemap, robots
- AI-friendly [/llms.txt](https://llmstxt.org): Adds a \`/llms.txt\` file to help AI models identify and interact with site content.
- Tailwind CSS v4: Modern utility-first CSS framework for styling`,
    logo: "https://assets.tomhacks.com/images/project-logos/nerdbooks.svg",
    isExpanded: true,
  },
];
