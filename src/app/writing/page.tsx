import { Layout } from "@/components/layout";
import Link from "next/link";

type BlogPost = {
  title: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "my first experience with startup",
    slug: "/writing/mystartupjourney",
  },
];

export default function WritingPage() {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <h1 className="font-medium text-slate-800 dark:text-slate-100 text-2xl mb-6 tracking-tight animate-slide-up">Blog</h1>

        <div className="space-y-6 animate-slide-up stagger-1 opacity-0">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="flex flex-col space-y-1 py-2 group"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-full flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-slate-800 dark:text-slate-100 text-lg font-medium tracking-tight group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300 flex items-center gap-2">
                    <span className="opacity-0 w-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-500">→</span>
                    {post.title}
                  </p>
                </div>
                <div className="h-[1px] w-0 bg-slate-300/50 dark:bg-slate-700 mt-2 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
