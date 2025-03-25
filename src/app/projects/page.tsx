"use client";

import { Layout } from "@/components/layout";
import Link from "next/link";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
  images?: string[];
  tags: ProjectTag[];
};

// Project data
const projects: Project[] = [
  {
    title: "TiltQ",
    description: "League of Legends AI Tilt Detector created as a Riot API-powered web app with Google Gemini AI for analyzing player performance and detecting tilt patterns, gaining 3,000+ visits on launch day.",
    links: {
      github: "https://github.com/tmanzhe/tiltq",
      website: "https://tiltq.com"
    },
    images: [
      "/images/Tiltq Demo.gif"
    ],
    tags: [
      { name: "Riot API" },
      { name: "Gemini" },
      { name: "Next.js" },
    ],
  },
  {
    title: "Clash of Plans",
    description: "An AI agent that converts natural language into actionable tasks and calendar events, intelligently managing your schedule by understanding context and intent through LangChain and Cohere. Built for GenAI Genesis 2025.",
    links: {
      github: "https://github.com/JeffreyYeet1/cop",
      website: "https://devpost.com/software/clash-of-plans"
    },
    images: [
      "/images/copdemo1.png",
      "/images/copdemo2.png",
      "/images/copdemo3.png",
      "/images/copdemo4.png",
      "/images/copdemo5.png",

    ],
    tags: [
      { name: "Next.js" },
      { name: "FastAPI" },
      { name: "Python" },
      { name: "LangChain" },
      { name: "Cohere" },
      { name: "Supabase" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "MockMate",
    description: "An AI Interview Bot built at UofTHacks 12, leveraging Azure Speech, GPT-4o, Next.js, and PostgreSQL (AWS RDS) to simulate real-time interview experiences.",
    links: {
      github: "https://github.com/tmanzhe/mockmate",
    },
    images: [
      "/images/mockmatedemo1.png",
      "/images/mockmatedemo2.png",
      "/images/mockmatedemo3.png"
    ],
    tags: [
      { name: "Next.js" },
      { name: "Azure Speech" },
      { name: "OpenAI" },
      { name: "PostgreSQL" },
      { name: "AWS RDS" },
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
    title: "GestureFlow",
    description: "An innovative virtual mouse control system that uses computer vision and gesture recognition to enable hands-free computer interaction, making computing more accessible and intuitive.",
    links: {
      github: "https://github.com/tmanzhe/virtual_mouse",
    },
    images: [
      "/images/virtual-mouse.png",
      "/images/clicker.png"
    ],
    tags: [
      { name: "Python" },
      { name: "Computer Vision" },
      { name: "Gesture Recognition" },
      { name: "OpenCV" },
    ],
  },
  {
    title: "Self-Driving Car Simulator",
    description: "An interactive web-based simulation of autonomous vehicle behavior, featuring realistic physics, obstacle detection, and path planning algorithms.",
    links: {
      github: "https://github.com/tmanzhe/self_driving_car",
    },
    images: [
      "/images/drive-1.png",
      "/images/drive-2.png"
    ],
    tags: [
      { name: "JavaScript" },
      { name: "HTML5 Canvas" },
      { name: "Physics Simulation" },
      { name: "Path Planning" },
    ],
  },
];

// Project card component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project.images && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

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
        <div className="flex gap-2">
          <Link
            href={project.links.github || '#'}
            target="_blank"
            className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300 hover:rotate-12"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github size={18} className="hover:scale-110 transition-transform duration-300" />
          </Link>
          {project.links.website && (
            <Link
              href={project.links.website}
              target="_blank"
              className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300 hover:rotate-12"
              aria-label={`Website for ${project.title}`}
            >
              <ExternalLink size={18} className="hover:scale-110 transition-transform duration-300" />
            </Link>
          )}
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-6 tracking-tight group-hover:translate-x-1 transition-transform duration-700">{project.description}</p>
      
      {project.images && project.images.length > 0 && (
        <div className="relative aspect-video rounded-lg overflow-hidden mb-6 group-hover:shadow-md transition-all duration-500 group-hover:scale-[1.02] group-hover:translate-y-[-2px] group-hover:bg-gradient-to-br group-hover:from-slate-100 group-hover:to-slate-200 dark:group-hover:from-slate-800 dark:group-hover:to-slate-700">
          {project.images.length === 1 && project.images[0].endsWith('.gif') ? (
            <Image
              src={project.images[0]}
              alt={`${project.title} demo`}
              fill
              className="object-cover"
            />
          ) : (
            <>
              <div 
                className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {project.images.map((image, idx) => (
                  <div key={idx} className="min-w-full relative">
                    <Image
                      src={image}
                      alt={`${project.title} demo ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      idx === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prevImage}
                  className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-r-lg transition-colors duration-300"
                  disabled={currentImageIndex === 0}
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-l-lg transition-colors duration-300"
                  disabled={currentImageIndex === project.images.length - 1}
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
            </>
          )}
        </div>
      )}
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded hover-scale cursor-default"
            style={{ animationDelay: `${0.05 * (idx + 1)}s` }}
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
