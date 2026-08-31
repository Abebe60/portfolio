import React from 'react';
import { Send, Mail, MessageSquare, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* HEADER */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
          <Send className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Start a <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Conversation</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Interested in discussing data engineering projects, system architecture consulting, or full-time opportunities? Send me a message below.
        </p>
      </div>

      {/* FORM SECTION */}
      <ContactForm />

      {/* QUICK FAQ CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800/80">
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-cyan-400">
            <Clock className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">Rapid Response Time</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            I respond to all serious project inquiries and job opportunities within 2 to 12 hours.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-blue-400">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">NDAs & Privacy</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            All details, architecture discussions, and codebase access share standard confidentiality.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">Full-Stack Capability</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            From backend Python/FastAPI/Elasticsearch data pipelines to responsive React TypeScript UIs.
          </p>
        </div>
      </div>

    </div>
  );
};
