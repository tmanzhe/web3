import { Layout } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-12">
        {/* Profile section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 animate-fade-in">
          <div className="relative animate-slide-up">
            <div className="h-[200px] w-[200px] rounded-full border-4 border-slate-200 dark:border-slate-700 bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-300 text-4xl font-medium hover-rotate overflow-hidden group">
              <Image
                src="/images/me.png"
                alt="Truman Chan"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 text-center md:text-left animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
            <div className="text-slate-600 dark:text-slate-300 text-base font-[400] tracking-tight space-y-2">
              <span className="block mb-4 group hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-300 cursor-default rounded-sm dark:hover:bg-slate-800/50">currently:</span>
              <div className="space-y-3">
                <div className="flex items-center gap-2 group">
                  <span className="text-slate-400 dark:text-slate-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 group-hover:text-slate-800 dark:group-hover:text-slate-100 rounded-sm dark:group-hover:bg-slate-800/50">building a club @ yorku to build tech for non profits</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <span className="text-slate-400 dark:text-slate-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 group-hover:text-slate-800 dark:group-hover:text-slate-100 rounded-sm dark:group-hover:bg-slate-800/50">enhancing TiltQ with Marvel Rivals features, following its successful launch with 3,000+ users on day one</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Link
                href="/projects"
                className="text-sm px-4 py-2 rounded-md bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md button-hover"
              >
                See my projects
              </Link>
              <a
                href="https://drive.google.com/file/d/1Ewu6TmMRNe6X66hgB5DkmQjLe2Wbo-kG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-md bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md button-hover"
              >
                View my resume
              </a>
            </div>
          </div>
        </div>

        {/* Education section */}
        <div className="animate-slide-up stagger-3 opacity-0">
          <h2 className="font-medium text-slate-800 dark:text-slate-200 mb-4 text-lg">Education</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-500 cursor-default">
              <span className="text-slate-400 dark:text-slate-500 mt-1 animate-bounce-slow">•</span>
              <div>
                <h3 className="text-md font-medium text-slate-800 dark:text-slate-300 tracking-tight">
                  <a 
                    href="https://lassonde.yorku.ca/computer-science" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Computer Science (BSc Honours)
                  </a>
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">York University</p>
              </div>
            </li>
            <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-500 cursor-default">
              <span className="text-slate-400 dark:text-slate-500 mt-1 animate-bounce-slow" style={{ animationDelay: "0.3s" }}>•</span>
              <div>
                <h3 className="text-md font-medium text-slate-800 dark:text-slate-300 tracking-tight">
                  <a 
                    href="https://schulich.yorku.ca/programs/mmgt/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Management (MMGT)
                  </a>
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Schulich School of Business</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Experience section */}
        <div className="animate-slide-up stagger-4 opacity-0">
          <h2 className="font-medium text-slate-800 dark:text-slate-200 mb-4 text-lg">Experience</h2>
          <ol className="relative border-s border-slate-200 dark:border-slate-700">
            <li className="mb-6 ms-4 group">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-200 dark:border-slate-700 bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-500 transition-colors duration-300 group-hover:animate-pulse"></div>
              <div className="flex flex-row items-center gap-2">
                <h3 className="text-md font-medium text-slate-800 dark:text-slate-300 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                  Software Engineering Lead
                </h3>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-slate-500 text-slate-500 dark:text-slate-400 dark:border-slate-400">incoming</div>
              </div>
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400 group-hover:translate-x-1 transition-transform duration-500">
                <a 
                  href="https://demanesports.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Deman Esports
                </a>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:translate-x-1 transition-transform duration-500">Leading development of an esports platform serving 75,000+ members.</p>
            </li>
            <li className="ms-4 group">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-200 dark:border-slate-700 bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-500 transition-colors duration-300 group-hover:animate-pulse"></div>
              <h3 className="text-md font-medium text-slate-800 dark:text-slate-300 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                Software Engineer
              </h3>
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400 group-hover:translate-x-1 transition-transform duration-500">
                <a 
                  href="https://www.itmz.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  ITMZ
                </a>
                {" "}
                (Next 36 Fall 2024 Cohort)
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:translate-x-1 transition-transform duration-500">Built and optimized mobile app features using Flutter and AWS services.</p>
            </li>
          </ol>
        </div>

        {/* Projects Preview section */}
        <div className="animate-slide-up stagger-5 opacity-0">
          <h2 className="font-medium text-slate-800 dark:text-slate-200 mb-4 text-lg">Notable Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "MockMate",
                description: "AI Interview Bot",
                github: "https://github.com/tmanzhe/mockmate"
              },
              {
                title: "Sesame",
                description: "AI-Powered Productivity App",
                github: "https://github.com/tmanzhe/sesame"
              },
              {
                title: "TiltQ",
                description: "League of Legends AI Tilt Detector",
                github: "https://github.com/tmanzhe/tiltq"
              },
              {
                title: "Minimi",
                description: "Summarization Chrome Extension",
                github: "https://github.com/tmanzhe/minimi"
              },
            ].map((project, index) => (
              <Link
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 card-hover group"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-medium text-slate-800 dark:text-slate-300">
                    {project.title}
                  </h3>
                  <Github size={14} className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300" />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/projects"
              className="text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors hover-underline inline-flex items-center gap-1 group"
            >
              View all projects
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>

        {/* Skills section */}
        <div className="animate-slide-up stagger-5 opacity-0">
          <h2 className="font-medium text-slate-800 dark:text-slate-200 mb-4 text-lg">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Java",
              "Python",
              "TypeScript",
              "React",
              "Spring Boot",
              "Flutter",
              "AWS",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "C",
              "Assembly"
            ].map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded hover-scale cursor-default"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
 //<span className="group-hover:translate-x-1 transition-transform duration-300 group-hover:text-slate-800 dark:group-hover:text-slate-100 rounded-sm dark:group-hover:bg-slate-800/50">building a digital platform for <a href="https://www.facebook.com/hkcomhome/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors">Com House</a>, a social housing non-profit in Hong Kong</span>

