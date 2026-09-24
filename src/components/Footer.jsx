import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, GithubIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0a] py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand / Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-sm tracking-tight">Gaurav Saha</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs text-zinc-400">Full Stack Developer</span>
            </div>
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Gaurav Saha. Clean, minimal web applications.
            </p>
          </div>

          {/* Center / Right: Social Links */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="mailto:gauravsaha362@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors py-1 px-2.5 rounded-md hover:bg-zinc-900 border border-transparent hover:border-white/5"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gaurav-saha-2b805a36b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors py-1 px-2.5 rounded-md hover:bg-zinc-900 border border-transparent hover:border-white/5"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://instagram.com/sgs_gaurav-builds_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors py-1 px-2.5 rounded-md hover:bg-zinc-900 border border-transparent hover:border-white/5"
            >
              <InstagramIcon size={14} />
              <span>Instagram</span>
            </a>

            <a
              href="tel:8839014534"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors py-1 px-2.5 rounded-md hover:bg-zinc-900 border border-transparent hover:border-white/5"
            >
              <Phone size={14} />
              <span>8839014534</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
