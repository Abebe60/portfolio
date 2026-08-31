import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, ArrowRight, Activity, Database, Cpu, Server } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const getCategoryIcon = (category: Project['category']) => {
  switch (category) {
    case 'AI & LLM':
      return <Cpu className="w-4 h-4 text-cyan-400" />;
    case 'Data Engineering':
      return <Database className="w-4 h-4 text-blue-400" />;
    case 'Backend & APIs':
      return <Server className="w-4 h-4 text-indigo-400" />;
    default:
      return <Activity className="w-4 h-4 text-emerald-400" />;
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-lg hover:shadow-cyan-950/20">
      
      {/* Category & Badge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
            {getCategoryIcon(project.category)}
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              FEATURED
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-cyan-400/90 font-mono mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Key metrics highlight */}
        <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-950/50 border border-slate-800/60">
          {project.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-mono">{m.label}</span>
              <span className="text-xs font-bold text-cyan-300 font-mono">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer & Action Buttons */}
      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 text-xs font-mono">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-1.5 py-0.5 text-slate-400 text-xs font-mono">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Action button */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
          <button
            onClick={() => onSelect(project)}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View Architecture & Specs</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                aria-label="View Source Code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
