import React from 'react';
import { skillCategories } from '../data/skills';
import { User, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const currentlyLearning = [
    'TypeScript',
    'TanStack Query',
    'Next.js',
    'SQL',
    'Python',
    'C++ (Basics)',
    'AI/ML'
  ];

  const computerSkills = [
    'Hindi Typing',
    'English Typing',
    'MS Excel',
    'MS Word',
    'MS PowerPoint'
  ];

  const languagesKnown = [
    'Hindi (Native)',
    'Bengali (Native)',
    'English (Basic)'
  ];

  const softSkills = [
    'Problem Solving',
    'AI-Assisted Debugging',
    'Quick Learner',
    'Team Collaboration',
    'Time Management',
    'Leadership (developed through NCC)'
  ];

  return (
    <div className="max-w-4xl space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
          <User size={13} />
          <span>About Me</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Passionate about building scalable & clean web applications.
        </h1>
      </div>

      {/* Bio Section */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
          Biography
        </h2>
        <div className="p-8 rounded-2xl bg-[#121214] border border-white/10 space-y-4">
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            I am <strong className="text-white font-semibold">Gaurav Saha</strong>, a Full Stack MERN Developer and AI/ML enthusiast based in Ujjain, Madhya Pradesh. I am currently pursuing my BCA (1st year) at Ujjain Advanced College, Vikram University, alongside an advanced <span className="text-zinc-200 font-medium">Full Stack Web Development with Generative AI</span> program at Indore E-Skills, Palasia.
          </p>
          <p className="text-base text-zinc-400 leading-relaxed">
            I am passionate about building real-world, user-centric applications — including AI-powered platforms built using the Google Gemini API. Having independently designed and shipped multiple full-stack web projects, I combine strong problem-solving skills with a constant drive to learn.
          </p>
          <p className="text-base text-zinc-400 leading-relaxed">
            Currently, I am deepening my skills in AI/ML and backend engineering, including robust REST API design and testing using tools like Requestly.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
          Achievements
        </h2>
        <div className="p-6 rounded-2xl bg-[#121214] border border-white/10">
          <ul className="space-y-3.5">
            <li className="flex items-center gap-3 text-sm text-zinc-300">
              <Award size={16} className="text-emerald-400 shrink-0" />
              <span>Gold Medalist — Best Firer, Army NCC</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-zinc-300">
              <Award size={16} className="text-emerald-400 shrink-0" />
              <span>Attained the rank of CHM (Company Havildar Major), Army NCC</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-zinc-300">
              <Award size={16} className="text-emerald-400 shrink-0" />
              <span>NCC 'A' Certificate Holder — Indian Army</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-zinc-300">
              <Award size={16} className="text-emerald-400 shrink-0" />
              <span>2nd Position — Ujjain District Arm Wrestling Championship (Left Arm)</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-zinc-300">
              <Award size={16} className="text-emerald-400 shrink-0" />
              <span>State-Level Participant — State Arm Wrestling Championship</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-zinc-300">
              <Award size={16} className="text-emerald-400 shrink-0" />
              <span>Represented school in Ghosh Band at the State level (twice)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <div className="flex flex-col space-y-1">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
            Technical Stack & Skills
          </h2>
          <p className="text-sm text-zinc-400">
            Minimal pills of technologies and tools I work with daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121214] border border-white/10 flex flex-col justify-between space-y-4"
            >
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Subsection */}
        <div className="pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400/90 animate-pulse" />
              <span>Currently Learning</span>
            </h3>
            <span className="text-xs font-mono text-zinc-500">In Progress</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#121214] border border-white/10">
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-zinc-400 bg-zinc-900/60 border border-zinc-700/60 px-3 py-1.5 rounded-lg hover:border-zinc-500 hover:text-zinc-200 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Competencies: Computer Skills, Languages Known, Soft Skills */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
          Additional Competencies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Computer Skills */}
          <div className="p-6 rounded-2xl bg-[#121214] border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Computer Skills</span>
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {computerSkills.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg hover:border-zinc-700 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Known */}
          <div className="p-6 rounded-2xl bg-[#121214] border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Languages Known</span>
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {languagesKnown.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg hover:border-zinc-700 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="p-6 rounded-2xl bg-[#121214] border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Soft Skills</span>
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {softSkills.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg hover:border-zinc-700 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Principles */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
          Development Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#121214] border border-white/10 flex items-start gap-3.5">
            <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Clean & Intentional Code</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Readable, modular component structures with strong type discipline and predictable data flow.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#121214] border border-white/10 flex items-start gap-3.5">
            <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Minimal & Fast UI</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Focus on performance, content clarity, and smooth micro-interactions without flashy bloat.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
