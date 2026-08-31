import React, { useState } from 'react';
import { Database, Cpu, Activity, ShieldCheck, Layers, GitBranch, ArrowRight, Zap, CheckCircle } from 'lucide-react';

const pipelineNodes = [
  {
    id: 'ingestion',
    title: '1. Data Ingestion Stream',
    tech: 'Async Python / Kafka',
    detail: 'Continuous stream parsing network logs, JSON schemas, & threat telemetry at 5,000+ eps.',
    icon: Database,
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/50'
  },
  {
    id: 'storage',
    title: '2. Elasticsearch & SQL Hub',
    tech: 'ES 8.x / PostgreSQL',
    detail: 'High-speed index aggregation, real-time graph parsing, and risk scoring in <15ms.',
    icon: Layers,
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-500/50'
  },
  {
    id: 'evaluation',
    title: '3. Multi-Gen RAGET Engine',
    tech: 'Python / Giskard / LiteLLM',
    detail: 'Bypasses context limits, generates 120+ QA pairs across 8 categories autonomously.',
    icon: Cpu,
    color: 'from-indigo-500 to-purple-500',
    borderColor: 'border-purple-500/50'
  },
  {
    id: 'api',
    title: '4. FastAPI & React Dashboard',
    tech: 'FastAPI / React / TypeScript',
    detail: 'Serves endpoints with connection pooling, Redis caching, and real-time frontend charts.',
    icon: Activity,
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/50'
  }
];

export const PipelineVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">Interactive System Architecture</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            End-to-End Data & AI Pipeline
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-xs font-mono text-slate-300">Live Architecture Model</span>
        </div>
      </div>

      {/* Steps Flow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {pipelineNodes.map((node, idx) => {
          const Icon = node.icon;
          const isActive = activeStep === idx;
          return (
            <div
              key={node.id}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative flex flex-col justify-between ${
                isActive
                  ? `bg-slate-950/90 ${node.borderColor} shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/30 scale-[1.02]`
                  : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-950/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${node.color} p-0.5 flex items-center justify-center`}>
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{node.title}</h4>
                <p className="text-xs font-mono text-cyan-400/90 mb-3">{node.tech}</p>
              </div>

              <div className="pt-2 border-t border-slate-800/60">
                <p className="text-xs text-slate-400 leading-relaxed">{node.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Step Highlight Box */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
          <div>
            <span className="text-xs font-mono uppercase text-slate-400">Current Phase Focus</span>
            <p className="text-sm font-bold text-white">{pipelineNodes[activeStep].title} — <span className="text-cyan-400">{pipelineNodes[activeStep].tech}</span></p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-800"
          >
            Prev Stage
          </button>
          <button
            onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
            className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-mono font-bold hover:bg-cyan-400"
          >
            Next Stage
          </button>
        </div>
      </div>

    </div>
  );
};
