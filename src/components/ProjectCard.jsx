import React from 'react';
import { Bot, BookOpen, TrendingUp, CheckSquare, ArrowUpRight, FolderCode } from 'lucide-react';

const iconMap = {
  Bot: Bot,
  BookOpen: BookOpen,
  TrendingUp: TrendingUp,
  CheckSquare: CheckSquare,
};

export default function ProjectCard({ project }) {
  const IconComponent = iconMap[project.icon] || FolderCode;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between p-6 bg-[#121214] hover:bg-[#161619] border border-white/10 hover:border-emerald-500/40 rounded-2xl transition-all duration-200 hover:-translate-y-1 cursor-pointer overflow-hidden"
    >
      {/* Top row: Icon/Monogram + External Link Arrow */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
              <IconComponent size={22} />
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500 px-2 py-0.5 rounded bg-zinc-900/80 border border-white/5 group-hover:text-zinc-400 transition-colors">
              {project.monogram || 'PROJ'}
            </span>
          </div>

          <div className="w-8 h-8 rounded-lg bg-zinc-900/60 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Project Name */}
        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      {/* Bottom row: Tech Tags */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-auto">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-mono text-zinc-300 bg-zinc-900/80 border border-white/10 px-2.5 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
