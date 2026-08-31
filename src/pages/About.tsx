import React from 'react';
import { User, Briefcase, GraduationCap, Award, Terminal, CheckCircle2, ShieldCheck, Cpu, Phone, Mail, MapPin, Download } from 'lucide-react';
import { personalInfo, experiencesData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* HEADER */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
          <User className="w-3.5 h-3.5" />
          <span>PROFILE & CV OVERVIEW</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          {personalInfo.name} — <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Data Engineer</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          {personalInfo.bio}
        </p>
      </div>

      {/* PERSONAL PROFILE ATTRIBUTES */}
      <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          Personal Strengths & Profile Statement
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed italic bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          "{personalInfo.profileSummary}"
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Mail className="w-4 h-4 text-blue-400 shrink-0" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-300 transition-colors font-mono">{personalInfo.email}</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-mono">{personalInfo.phone}</span>
          </div>
        </div>
      </div>

      {/* CORE PHILOSOPHY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Terminal className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Logstash & Elasticsearch</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Specialized in writing custom parsing logic for structured and unstructured log telemetry to store, index, and query in Elasticsearch.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Multi-Language Data Pipelines</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Fluent in Python, Golang, and Ruby for building high-speed concurrent ingestion scripts and backend microservices.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">NoSQL & Relational DBs</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Experienced with MongoDB, Cassandra, Hbase, DynamoDB, and SQL database systems for resilient data storage.
          </p>
        </div>
      </div>

      {/* EXPERIENCE TIMELINE */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-8 space-y-10 ml-3">
          {experiencesData.map((exp) => (
            <div key={exp.id} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4 hover:border-cyan-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-semibold text-cyan-400 font-mono">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-slate-300">
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">({exp.location})</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-slate-950 text-slate-400 text-xs font-mono border border-slate-850">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Educational Background
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalInfo.educationList.map((edu, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 hover:border-cyan-500/40 transition-colors">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {edu.year}
              </span>
              <h3 className="text-base font-bold text-white">{edu.degree}</h3>
              <p className="text-xs text-slate-400 font-mono">{edu.institution}</p>
              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-xs text-cyan-300 font-mono font-semibold">{edu.details}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
