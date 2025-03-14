"use client";

import { Layout } from "@/components/layout";
import Link from "next/link";

export default function BlogPost() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="mb-8">
          <Link 
            href="/writing"
            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors mb-4 inline-flex items-center gap-2 animate-fade-in"
          >
            <span className="transform transition-transform group-hover:-translate-x-1">←</span> Back to blog
          </Link>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2 mt-4 animate-slide-up">
            From Zero to Something: My First Startup Experience at ITMZ
          </h1>
          <div className="text-slate-500 dark:text-slate-400 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '100ms' }}>
            March 15, 2024
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-8 animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
              <h3 className="text-slate-800 dark:text-slate-200 text-sm font-medium mb-2">Key Takeaways</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li className="animate-slide-up opacity-0" style={{ animationDelay: '300ms' }}>Surround yourself with actual people who wants to see you succeed</li>
                <li className="animate-slide-up opacity-0" style={{ animationDelay: '400ms' }}>Ask for help; no one expects you to know everything</li>
                <li className="animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>Dont be afraid to make mistaks</li>
              </ul>
            </div>

            <style jsx global>{`
              .highlight {
                position: relative;
                background: linear-gradient(120deg, #fef08a 0%, #fef9c3 100%);
                border-radius: 4px;
                padding: 0.1em 0.3em;
                margin: 0 -0.3em;
                box-decoration-break: clone;
                -webkit-box-decoration-break: clone;
              }
              .dark .highlight {
                background: linear-gradient(120deg, #7e22ce40 0%, #a855f760 100%);
                box-shadow: 0 0 25px #a855f750;
                border: 1px solid #a855f770;
              }
            `}</style>

            <p className="text-lg leading-relaxed mb-6 animate-slide-up opacity-0" style={{ animationDelay: '800ms' }}>
              tldr: I was just another first-year student making todo apps when a friend introduced me to ITMZ. 
              <i>Had no clue what I wanted to do with my life, let alone in tech.</i> <span className="highlight">That summer changed 
              everything - from how I approached coding to actually seeing a future for myself in software development.</span>
            </p>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8 animate-slide-up opacity-0" style={{ animationDelay: '900ms' }}>Complete Beginner Status</h2>
            
            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1000ms' }}>
              Before ITMZ, my biggest achievement was a todo list app and a basic web scraper. I had never worked with things like 
              an API, let alone ever touched cloud services like AWS. Suddenly I found myself staring at terms like 
              Amplify, Flutter, and FIGMA(...). <i>The amount of 
              time I spent just trying to set up my development environment was embarrassing</i>. But looking 
              back, that confusion was the start of something bigger.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1100ms' }}>
              Everything was new - pull requests, code reviews, and explaining my code to others. I probably 
              set some kind of record for most merge conflicts in a day. But the team's patience was 
              incredible. Instead of getting frustrated with my endless "how do I...?" questions and messy 
              pull requests, they turned every mistake into a learning opportunity. <i>I deadass felt like a deadbeat to the team. But they showed me that 
              being stuck on a problem doesnt not equal to failure. It called "learning".</i>
            </p>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8 animate-slide-up opacity-0" style={{ animationDelay: '1200ms' }}>Life at a Startup</h2>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1300ms' }}>
              Nothing in school prepared me for startup speed. Features would change direction mid-development, 
              priorities would shift overnight, and deadlines always felt like they were approaching at 
              light speed. But that's what made it exciting. I learned to adapt quickly, think on my feet, 
              and not get too attached to any piece of code I wrote.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1350ms' }}>
              <i>I was terrified at first. Everyone seemed so experienced, and there I was, barely able to 
              make a proper commit.</i> But instead of judgment, I found support. <span className="highlight">They didn't just tell me what 
              to do - they showed me how to think through problems.</span> No more mindless copy-pasting from 
              Stack Overflow/ChatGPT (lol broke my code too many times). Instead, I learned to understand the why behind every solution.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1400ms' }}>
              Being around ambitious people changed my whole perspective. I watched how they approached 
              challenges, communicated ideas, and most importantly, handled failure. They made it okay to 
              make mistakes and learn from them. Every bug I introduced became a learning opportunity, 
              every broken build a chance to understand the system better.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1425ms' }}>
              What really surprised me was how they valued my input from day one. <span className="highlight">Despite being the newest 
              and least experienced member, my ideas were taken seriously during our daily standups. I wasn't 
              just the "intern" - I was part of the team.</span> Our Friday demo meetings became something I looked 
              forward to, where everyone, including me, would show off what they built that week. It didn't 
              matter if you were a 10x dev or a first-year student; if you had something to share, people 
              were genuinely interested.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1450ms' }}>
              The biggest shift was learning how to ask for help. Before this, I'd spend hours stuck on a 
              problem, too embarrassed to admit I didn't understand something. The team taught me that 
              asking questions isn't a sign of weakness - it's how you grow. They showed me how to break 
              down problems, how to communicate what I'm stuck on, and how to learn from others' expertise.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1475ms' }}>
              Despite all my rookie mistakes and the extra work I created for everyone, the team's support 
              led to something meaningful. We built <a href="https://www.itmz.app" target="_blank" 
              rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ITMZ</a>, 
              a platform tackling the massive problem of overconsumption. With 300 million tons of waste 
              generated yearly in America alone, we created a cross-platform app helping people track and 
              share their personal items instead of buying new ones. Our work even earned an <a 
              href="https://www.youtube.com/watch?v=91ofxVvgu3I" target="_blank" rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 hover:underline">honorable mention in Google's 
              Gemini API Competition</a>. 
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1500ms' }}>
              Looking back, it wasn't just about learning to code better. It was about learning to think 
              better, work better, and grow better. The technical skills were just a bonus - what really 
              mattered was working alongside people who saw potential in others and genuinely wanted to 
              help them succeed.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8 animate-slide-up opacity-0" style={{ animationDelay: '1600ms' }}>The Reality Check</h2>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1700ms' }}>
              Getting asked to stay on for fall semester felt amazing. I was on top of the world... until 
              I wasn't. Trying to balance startup meetings with a full course load turned out to be more 
              than I could handle. I started missing deadlines, submitting half-finished work, and showing 
              up to meetings unprepared. It wasn't great.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1800ms' }}>
              Looking back, I could have handled things differently. Better communication, smarter time 
              management, maybe a lighter course load. But these mistakes taught me more about myself 
              than any success could have. Sometimes you need to mess up to figure out how to do better.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8 animate-slide-up opacity-0" style={{ animationDelay: '1900ms' }}>What I Learned</h2>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '2000ms' }}>
              It's amazing how much can change in one summer. I went from struggling with basic 
              development tools to building features that actual users depend on. The biggest lesson 
              wasn't even about coding - it was about surrounding yourself with people who help you grow. 
              The startup world is fast-paced and challenging, but that's exactly what makes it worth it.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '2100ms' }}>
              This experience actually inspired me. I started feeling genuinely ambitious about my future in tech, 
              building my own projects with newfound motivation, and actively seeking out people who pushed me 
              to grow. <i>Man the team @ ITMZ was lovely.</i>
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '2200ms' }}>
              Now, <span className="highlight">I'm about to lead my own team at Deman Esports, building an esports platform that will 
              serve over 75,000 users</span>. <i>Looking back at that fried ahh first-year student who barely knew how to even use GITHUB</i>, I'm incredibly grateful to the team at 
              ITMZ who took a chance on me. <i>They honestly helped shape my entire career trajectory.</i>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 