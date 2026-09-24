import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="space-y-12 max-w-5xl">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
          <FolderGit2 size={13} />
          <span>Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
          A selection of full-stack web applications, AI platforms, and interactive dashboards I've built. Click on any card to launch the live site.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
