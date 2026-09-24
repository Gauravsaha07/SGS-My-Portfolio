import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { qualifications } from '../data/qualification';

export default function Qualification() {
  const [filter, setFilter] = useState('all');

  const filteredData = filter === 'all'
    ? qualifications
    : qualifications.filter(q => q.type === filter);

  return (
    <div className="max-w-4xl space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
          <GraduationCap size={13} />
          <span>Background</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Qualifications & Experience
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
          My academic journey, software development experience, and technical certifications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        {[
          { id: 'all', label: 'All Timeline' },
          { id: 'experience', label: 'Experience' },
          { id: 'education', label: 'Education' },
          { id: 'certification', label: 'Certifications' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
              filter === tab.id
                ? 'bg-zinc-100 text-black shadow'
                : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-white/5 hover:border-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10 my-8">
        {filteredData.map((item) => {
          const getTypeBadge = () => {
            switch (item.type) {
              case 'experience':
                return { icon: Briefcase, text: 'Experience', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
              case 'education':
                return { icon: GraduationCap, text: 'Education', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' };
              case 'certification':
                return { icon: Award, text: 'Certification', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' };
              default:
                return { icon: Briefcase, text: item.type, color: 'text-zinc-400 bg-zinc-800 border-zinc-700' };
            }
          };

          const badge = getTypeBadge();
          const IconComponent = badge.icon;

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-[#121214] border border-white/10 hover:border-zinc-700 transition-all space-y-4">
                {/* Top Badge & Date */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${badge.color}`}>
                    <IconComponent size={13} />
                    {badge.text}
                  </span>

                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-zinc-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-zinc-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-zinc-400 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Bullet Highlights if available */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {item.highlights.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
