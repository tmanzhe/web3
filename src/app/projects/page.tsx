"use client";

import { Layout } from "@/components/layout";
import Link from "next/link";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { useState } from "react";

// Project type
type ProjectTag = {
  name: string;
};

type Project = {
  title: string;
  description: string;
  links: {
    github?: string;
    website?: string;
    youtube?: string;
  };
  tags: ProjectTag[];
};

// Project data
const projects: Project[] = [
  {
    title: "MockMate",
    description: "An AI Interview Bot built at UofTHacks 12, leveraging Azure Speech, GPT-4o, Next.js, and PostgreSQL (AWS RDS) to simulate real-time interview experiences.",
    links: {
      github: "https://github.com/tmanzhe/mockmate",
    },
    tags: [
      { name: "Next.js" },
      { name: "Azure Speech" },
      { name: "GPT-4o" },
      { name: "PostgreSQL" },
      { name: "AWS RDS" },
    ],
  },
  {
    title: "Sesame",
    description: "AI-Powered Productivity App developed as a full-stack Next.js & Spring Boot productivity tool with Three.js visualizations, JWT authentication, and OpenAI integrations.",
    links: {
      github: "https://github.com/tmanzhe/sesame",
    },
    tags: [
      { name: "Next.js" },
      { name: "Spring Boot" },
      { name: "Three.js" },
      { name: "JWT" },
      { name: "OpenAI" },
    ],
  },
  {
    title: "TiltQ",
    description: "League of Legends AI Tilt Detector created as a Riot API-powered web app with Google Gemini AI for analyzing player performance and detecting tilt patterns, gaining 3,000+ visits on launch day.",
    links: {
      github: "https://github.com/tmanzhe/tiltq",
    },
    tags: [
      { name: "Riot API" },
      { name: "Google Gemini AI" },
      { name: "Web App" },
    ],
  },
  {
    title: "Minimi",
    description: "Summarization Chrome Extension built with Spring Boot & JavaScript that fine-tunes Gemini models to generate concise summaries for students.",
    links: {
      github: "https://github.com/tmanzhe/minimi",
    },
    tags: [
      { name: "Spring Boot" },
      { name: "JavaScript" },
      { name: "Chrome Extension" },
      { name: "Gemini API" },
    ],
  },
];

// Project card component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="group mb-12 pb-8 border-b border-slate-200 dark:border-slate-800 animate-slide-up opacity-0"
      style={{ animationDelay: `${0.2 * (index + 1)}s` }}
    >
      <div className="mb-4 flex justify-between items-start">
        <h3 className="font-medium text-slate-800 dark:text-slate-100 text-xl tracking-tight group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-500">
          {project.links.website ? (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors group-hover:underline"
            >
              <span className="inline-flex items-center">
                <span className="opacity-0 w-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-500 mr-1">→</span>
                {project.title}
              </span>
            </a>
          ) : (
            <span className="inline-flex items-center">
              <span className="opacity-0 w-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-500 mr-1">→</span>
              {project.title}
            </span>
          )}
        </h3>
        <div className="flex space-x-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300 hover:rotate-12"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={18} className="hover:scale-110 transition-transform duration-300" />
            </a>
          )}
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300 hover:rotate-12"
              aria-label={`Website for ${project.title}`}
            >
              <ExternalLink size={18} className="hover:scale-110 transition-transform duration-300" />
            </a>
          )}
          {project.links.youtube && (
            <a
              href={project.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300 hover:rotate-12"
              aria-label={`YouTube video for ${project.title}`}
            >
              <Youtube size={18} className="hover:scale-110 transition-transform duration-300" />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-600 dark:text-slate-400 mb-6 tracking-tight group-hover:translate-x-1 transition-transform duration-700">{project.description}</p>

      <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-6 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:shadow-md transition-all duration-500 group-hover:scale-[1.02] group-hover:translate-y-[-2px] group-hover:bg-gradient-to-br group-hover:from-slate-100 group-hover:to-slate-200 dark:group-hover:from-slate-800 dark:group-hover:to-slate-700">
        <div className="transition-all duration-500 flex flex-col items-center gap-2 group-hover:scale-110">
          <span className="text-lg">{project.title}</span>
          <span className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-500">Demo Preview</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded hover-scale cursor-default"
            style={{ animationDelay: `${0.05 * (tagIndex + 1)}s` }}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}

// Projects page component
export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(project => {
    const searchLower = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.name.toLowerCase().includes(searchLower))
    );
  });

  return (
    <Layout>
      <div className="animate-fade-in">
        <h1 className="font-medium text-slate-800 dark:text-slate-100 text-2xl mb-6 tracking-tight animate-slide-up">Projects</h1>

        <div className="mb-8 animate-slide-up stagger-1 opacity-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a project, technology, etc..."
              className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 dark:focus:ring-slate-400 transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-2.5 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </div>
        </div>

        <div className="animate-slide-up stagger-2 opacity-0">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 p-6 border border-slate-200 dark:border-slate-800 rounded-lg animate-slide-up stagger-4 opacity-0 card-hover">
          <h2 className="text-slate-800 dark:text-slate-100 text-lg font-medium mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <span className="text-blue-800 dark:text-blue-100 text-xs">+</span>
            </span>
            Have a project idea?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            I'm always open to collaboration and new opportunities. If you have an idea you'd like to discuss, feel free to reach out!
          </p>
          <Link
            href="mailto:example@email.com"
            className="inline-flex text-sm px-4 py-2 rounded-md bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md button-hover"
          >
            Contact me
          </Link>
        </div>
      </div>
    </Layout>
  );
}
