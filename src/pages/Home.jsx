import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Sparkles, Layers, Mail } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import HeroTypewriter from '../components/HeroTypewriter';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-3xl space-y-8 pt-4 sm:pt-8">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for full-stack opportunities</span>
        </div>

        {/* ONE Combined Typewriter Block (Heading + Taglines continuous typing) */}
        <HeroTypewriter />

        {/* Intro Description Paragraph */}
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal max-w-2xl">
          I build full-stack web applications focused on performance, clean architecture, and intuitive user experiences. Specializing in React, Node.js, and modern JavaScript ecosystems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-sm"
          >
            <span>View Projects</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-white/10 hover:border-zinc-700 transition-all"
          >
            <Mail size={16} className="text-zinc-400" />
            <span>Contact Me</span>
          </Link>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
          Core Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-[#121214] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400">
              <Layers size={20} />
            </div>
            <h3 className="text-base font-bold text-white">Full Stack Apps</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              End-to-end web applications built with React frontend and Node.js/Express backend APIs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121214] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400">
              <Cpu size={20} />
            </div>
            <h3 className="text-base font-bold text-white">Modern Tech Stack</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Clean component architecture using Tailwind CSS, MongoDB, RESTful endpoints, and Vite.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121214] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400">
              <Sparkles size={20} />
            </div>
            <h3 className="text-base font-bold text-white">AI & Real-Time Tools</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Integrating intelligent features, real-time data flows, and interactive mock platform interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
              Featured Work
            </h2>
            <h3 className="text-2xl font-bold text-white mt-1">Recent Projects</h3>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>All projects</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
