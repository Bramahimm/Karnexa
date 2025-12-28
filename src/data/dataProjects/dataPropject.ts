// src/data/dataProjects/projects.ts

export type Project = {
  id: string;
  title: string;
  url?: string;
  img: string;
  description: string;
  techStack: string[];
};

export const projects: Project[] = [
  {
    id: "heoc-proaceh",
    title: "HEOC-ProAceh",
    url: "https://heoc-aceh.id", 
    img: "/projectsImages/heocProject.webp",
    description:
      "HEOC is a mission-critical crisis management platform specifically engineered to streamline health coordination and logistics in response to the current natural disaster crisis in Aceh. This system serves as a tactical command center that integrates real-time disease surveillance data to monitor trends at evacuation sites, alongside volunteer performance tracking and medical logistics distribution. Developed to ensure data-driven decision-making in high-pressure environments, HEOC facilitates a rapid response by mapping urgent medical needs at field outposts and ensuring transparent, accountable aid delivery across the most affected regions in Aceh.",
    techStack: ["Tailwind CSS", "Laravel", "MySQL"],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.id === slug);
};
