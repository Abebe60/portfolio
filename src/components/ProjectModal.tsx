import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Terminal, Cpu, Activity, BarChart2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-cyan-400 font-mono mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1 font-mono uppercase">{metric.label}</span>
              <span className="text-xl font-bold text-white text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-200 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            Project Architecture & Engineering Overview
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Highlights */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Key Technical Innovations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800/60 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Snippet if present */}
        {project.codeSnippet && (
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              Core Implementation Logic
            </h3>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300/90 overflow-x-auto leading-relaxed">
              <pre>{project.codeSnippet}</pre>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm transition-colors shadow-md shadow-cyan-500/20"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
