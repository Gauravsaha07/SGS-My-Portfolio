import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Qualification', path: '/qualification' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/85 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Logo / Name */}
        <NavLink 
          to="/" 
          className="flex items-center gap-2.5 group text-white font-semibold text-base tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
            <Code2 size={18} />
          </div>
          <span className="group-hover:text-emerald-400 transition-colors">
            Gaurav Saha
          </span>
          <span className="hidden sm:inline-block text-xs text-zinc-500 font-normal px-2 py-0.5 rounded bg-zinc-900 border border-white/5">
            Dev
          </span>
        </NavLink>

        {/* Right: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-emerald-400 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <a
            href="https://github.com/gauravsaha362" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white px-3 py-1.5 rounded-md border border-white/10 hover:border-zinc-700 bg-zinc-900/50 transition-all"
          >
            GitHub
            <ArrowUpRight size={13} className="text-zinc-500" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900/80 border border-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0c0e] px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-zinc-900 text-emerald-400 border border-emerald-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
