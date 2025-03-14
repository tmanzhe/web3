import { Layout } from "@/components/layout";
import Link from "next/link";

export default function BlogPost() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="mb-8">
          <Link 
            href="/writing"
            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors mb-4 inline-flex items-center gap-2"
          >
            ← Back to blog
          </Link>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2 mt-4">
            Building at Scale: My Experience with ITMZ and Mobile Development
          </h1>
          <div className="text-slate-500 dark:text-slate-400 mb-8">
            March 15, 2024
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-8">
              <h3 className="text-slate-800 dark:text-slate-200 text-sm font-medium mb-2">Key Takeaways</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>Led frontend development for a Next 36 startup</li>
                <li>Architected and implemented Flutter UI components</li>
                <li>Optimized app performance and reliability</li>
                <li>Developed scalable API integrations</li>
                <li>Contributed to product strategy and user experience</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              In my first year at Carleton University, I joined ITMZ as a Software Engineer, working on a mobile app that would later become part of the Next 36 Fall 2024 cohort. This experience marked a significant transition from academic programming to production-level development, offering insights into building scalable applications and working within a startup environment.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8">Technical Architecture and Implementation</h2>
            <p className="mb-6">
              My role focused on frontend development using Flutter, where I designed and implemented UI components that would scale with the application's growth. The challenge wasn't just in writing code, but in creating maintainable, performant solutions that could handle increasing user loads. One notable achievement was identifying and resolving a critical issue with Flutter's internet connectivity package, which was causing intermittent app failures for our users.
            </p>

            <div className="border-l-4 border-slate-300 dark:border-slate-600 pl-4 my-8">
              <p className="italic text-slate-600 dark:text-slate-400">
                "The most impactful solutions often come from understanding both the technical and user perspectives. Fixing that connectivity issue wasn't just about code - it was about ensuring a reliable experience for thousands of users."
              </p>
            </div>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8">Building for Scale</h2>
            <p className="mb-6">
              Working at ITMZ taught me the importance of building systems that can grow. This meant not just writing code that works, but implementing patterns and practices that would support future development. I focused on creating reusable components, establishing clear API integration patterns, and ensuring our frontend architecture could accommodate new features without compromising performance.
            </p>

            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-8">
              <h3 className="text-slate-800 dark:text-slate-200 font-medium mb-4">Technical Contributions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Designed and implemented a component library for consistent UI patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Developed robust API integration layer with error handling and retry logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Optimized app performance through efficient state management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Implemented automated testing for critical user flows</span>
                </li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8">Looking Forward</h2>
            <p className="mb-6">
              As I prepare to join Deman Esports as Software Engineering Lead, I'm taking with me the technical foundation and leadership experience gained at ITMZ. The opportunity to work on a platform serving 75,000+ members presents an exciting challenge in scaling systems and managing technical teams. The lessons learned in building maintainable, scalable applications will be invaluable in this next chapter.
            </p>

            <p className="text-slate-600 dark:text-slate-400 italic mt-12">
              Learn more about ITMZ at <a href="https://www.itmz.app" className="text-slate-800 dark:text-slate-200 underline">ITMZ</a> or connect with me on <a href="https://www.linkedin.com/in/trumanchan/" className="text-slate-800 dark:text-slate-200 underline">LinkedIn</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 