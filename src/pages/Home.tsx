import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Database, ArrowRight, Sparkles, Terminal, Code2, Cpu, Activity, ShieldCheck, Download, Layers } from 'lucide-react';
import { personalInfo, projectsData, skillCategories } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { PipelineVisualizer } from '../components/PipelineVisualizer';
import { Project } from '../types';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-20 pb-16 pt-8">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-10 sm:pt-16 pb-12">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-slate-300">DATA & AI SYSTEM ARCHITECTURE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Architecting <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">High-Throughput</span> Data Pipelines & AI Engines.
            </h1>

            {/* Subheading */}
            <p className="text-lg text-slate-300 leading-relaxed">
              Specialized in <strong className="text-cyan-300 font-medium">Python, Elasticsearch, FastAPI, SQL, RAGET pipelines</strong>, and modern <strong className="text-cyan-300 font-medium">React + TypeScript</strong> interfaces. Building production systems that process millions of records cleanly and efficiently.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-sm transition-all hover:bg-slate-850"
              >
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-2xl font-extrabold text-white font-mono">{stat.value}</span>
                  <p className="text-xs text-slate-400 font-mono uppercase">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE PIPELINE ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PipelineVisualizer />
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Featured Work</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Production-Grade Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 font-mono"
          >
            <span>View All Projects ({projectsData.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* TECH STACK HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Core Engineering Stack
            </h2>
            <p className="text-sm text-slate-400">
              Modern tools and frameworks powering data pipelines, APIs, and client dashboards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-4">
            {[
              { name: 'Python', role: 'Data & Backend' },
              { name: 'Elasticsearch', role: 'Search & Risk DB' },
              { name: 'FastAPI', role: 'Async Microservices' },
              { name: 'SQL / Postgres', role: 'Relational DB' },
              { name: 'React + TS', role: 'Frontend UI' },
              { name: 'Tailwind CSS', role: 'Styling' },
              { name: 'Giskard RAGET', role: 'QA Evaluation' },
              { name: 'Docker', role: 'Containerization' },
              { name: 'Kafka', role: 'Stream Processing' },
              { name: 'Redis', role: 'Caching & Lock' },
              { name: 'Vite', role: 'Build Tool' },
              { name: 'Git & Linux', role: 'DevOps & OS' },
            ].map((tech, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center hover:border-cyan-500/40 transition-colors">
                <span className="text-sm font-bold text-white block mb-0.5">{tech.name}</span>
                <span className="text-[10px] text-slate-400 font-mono block">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
};
