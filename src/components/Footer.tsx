import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Github, Linkedin, Mail, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/50">
          
          {/* Column 1: Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Database className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-slate-100 tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Architecting scalable data engineering pipelines, high-speed Elasticsearch analytics engines, and evaluation frameworks for LLM deployments.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About & Experience</Link></li>
              <li><Link to="/skills" className="hover:text-cyan-400 transition-colors">Skills & Technologies</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects Showcase</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Column 3: Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono">Core Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'React', 'FastAPI', 'Elasticsearch', 'SQL', 'TypeScript', 'Tailwind', 'RAGET'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400/90">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-400 font-mono">Available for Senior Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
