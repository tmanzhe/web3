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
            my first experience with startup
          </h1>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-8 animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
              <h3 className="text-slate-800 dark:text-slate-200 text-sm font-medium mb-2">Key Takeaways</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li className="animate-slide-up opacity-0" style={{ animationDelay: '300ms' }}>The right environment and people can transform your learning journey</li>
                <li className="animate-slide-up opacity-0" style={{ animationDelay: '400ms' }}>Being around supportive people who push you to grow is crucial</li>
                <li className="animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>Learning to ask for help and embrace mistakes is part of growth</li>
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
              tldr: was just a first-year making todo apps when i found ITMZ. thought i was cooked for cs, 
              but found myself in a place where learning and growth were celebrated, not judged. 
              the team showed me what it means to be around people who actually want to see you win.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8 animate-slide-up opacity-0" style={{ animationDelay: '900ms' }}>The Right Environment</h2>
            
            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1000ms' }}>
              Before ITMZ, I was just another student grinding through CS assignments. My biggest achievement was a todo list app 
              and a basic web scraper. I had never worked with APIs or cloud services like AWS. Suddenly I found myself staring 
              at terms like Amplify, Flutter, and FIGMA. The amount of time I spent just trying to set up my development 
              environment was embarrassing. But looking back, that confusion was the start of something bigger.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1100ms' }}>
              Everything was new - pull requests, code reviews, and explaining my code to others. I probably 
              set some kind of record for most merge conflicts in a day. But the team's patience was 
              incredible. Instead of getting frustrated with my endless "how do I...?" questions and messy 
              pull requests, they turned every mistake into a learning opportunity. I felt like a deadbeat to the team. But they showed me that 
              being stuck on a problem doesn't equal failure. It's called "learning".
            </p>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8 animate-slide-up opacity-0" style={{ animationDelay: '1200ms' }}>The Right People</h2>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1300ms' }}>
              What made ITMZ special wasn't just the work - it was the people. One day you're deep into learning how to make basic API calls with AWS, 
              the next you're designing and trying to push out a new feature. The pace was relentless, but the team made it feel manageable. 
              They showed me how to be comfortable with uncertainty and pivot quickly when needed.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1350ms' }}>
              I was terrified at first. Everyone seemed so experienced, and there I was, barely able to 
              make a proper commit. But instead of judgment, I found support. They didn't just tell me what 
              to do - they showed me how to think through problems. No more mindless copy-pasting from 
              Stack Overflow/ChatGPT (lol broke my code too many times). Instead, I learned to understand the why behind every solution.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1400ms' }}>
              One of the biggest lessons? Documentation is your best friend. Before ITMZ, I was the king of copy-pasting code 
              and pretending I knew what I was doing. But when you start breaking production code, you quickly learn that 
              Stack Overflow solutions only get you so far. I spent countless hours reading through Flutter/dart docs, 
              and aws api calls etc. At first, it felt like a waste of time - why read when you can just Google the 
              solution? But diving deep into docs taught me how to actually understand the tools I was using, not just use them. 
              It's like learning a language by reading books instead of just memorizing phrases.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1425ms' }}>
              The team at ITMZ created this unique environment where learning was celebrated. No corporate BS, no endless meetings 
              about meetings. Just a bunch of people trying to build something cool. We'd watch others's demos, discuss decisions, 
              and celebrate wins (and sometimes losses) together. It was sometimes intense, but it was genuine.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1450ms' }}>
              What really surprised me was how they valued my input from day one. Despite being the newest 
              and least experienced member, my ideas were taken seriously during our daily standups. I wasn't 
              just the "intern" - I was part of the team. Our Friday demo meetings became something I looked 
              forward to, where everyone, including me, would show off what they built that week. It didn't 
              matter if you were a 10x dev or a first-year student; if you had something to share, people 
              were genuinely interested.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1475ms' }}>
              The biggest shift was learning how to ask for help. Before this, I'd spend hours stuck on a 
              problem, too embarrassed to admit I didn't understand something. The team taught me that 
              asking questions isn't a sign of weakness - it's how you grow. They showed me how to break 
              down problems, how to communicate what I'm stuck on, and how to learn from others' expertise.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1500ms' }}>
              Despite all my rookie mistakes and the extra work I created for everyone, the team's support 
              led to something meaningful. We built <a href="https://www.itmz.app" target="_blank" 
              rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ITMZ</a>, 
              a platform tackling the massive problem of overconsumption. With 300 million tons of waste 
              generated yearly in America alone, we created a cross-platform app helping people track and 
              share their personal items instead of buying new ones. Our work even earned an <a 
              href="https://ai.google.dev/competition" target="_blank" rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 hover:underline">honorable mention in Google's 
              Gemini API Competition</a> (<a href="https://www.youtube.com/watch?v=91ofxVvgu3I" target="_blank" 
              rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">watch the video</a>). 
            </p>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8 animate-slide-up opacity-0" style={{ animationDelay: '1600ms' }}>The Reality Check</h2>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1700ms' }}>
              Getting asked to stay on for fall semester felt amazing. I was on top of the world... until 
              I wasn't. The team was full of 10x devs who could ship features in their sleep, while I was 
              still figuring out basic git commands. Trying to balance startup meetings with a full course load 
              turned out to be more than I could handle. I started drifting away - missing deadlines, submitting 
              half-finished work, and showing up to meetings unprepared. It wasn't great.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '1800ms' }}>
              Looking back, I could have handled things differently. Better communication, smarter time 
              management, maybe a lighter course load. But these mistakes taught me more about myself 
              than any success could have. Sometimes you need to mess up to figure out how to do better.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8 animate-slide-up opacity-0" style={{ animationDelay: '1900ms' }}>The Impact</h2>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '2000ms' }}>
              What I learned at ITMZ went beyond just coding. It was about finding the right environment and 
              people who push you to grow. The technical skills were just a bonus - what really mattered 
              was working alongside people who saw potential in others and genuinely wanted to help them succeed.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '2100ms' }}>
              This experience changed how I approach learning and growth. I started feeling genuinely ambitious 
              about my future in tech, building my own projects with newfound motivation, and actively seeking 
              out people who pushed me to grow. The team at ITMZ was amazing.
            </p>

            <p className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '2200ms' }}>
              Now, I'm about to lead my own team at Deman Esports, building an esports platform that will 
              serve over 75,000 users. Looking back at that first-year student who barely knew how to use GITHUB, 
              I'm incredibly grateful to the team at ITMZ who took a chance on me. They showed me what it means to be surrounded 
              by the right people.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 