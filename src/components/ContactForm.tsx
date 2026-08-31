import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Mail, MapPin, Clock, Calendar, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Big Data Engineering & Analytics Inquiry',
    projectType: 'ETL / ELT Data Pipeline',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Sender Email: ${formData.email}\n` +
      `Project Category: ${formData.projectType}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    // Trigger mailto directly
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Contact Info Sidebar */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">Let's Connect</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Have an ETL/ELT pipeline challenge, Elasticsearch query optimization need, or high-volume data project? Send me a direct message or copy my email address.
            </p>
          </div>

          {/* Quick Copy Email Card */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Direct Email</span>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white font-mono hover:text-cyan-300 transition-colors truncate block">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors shrink-0"
              title="Copy Email to Clipboard"
            >
              {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>

          {/* Details list */}
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Location: {personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Response SLA: Within 2 Hours</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Availability: Open for Full-time & Contract Roles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Form */}
      <div className="lg:col-span-7">
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 relative">
          
          {submitted ? (
            <div className="py-12 text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Opening Mail Client...</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your default email app (Gmail, Outlook, or Apple Mail) was opened with your message addressed to <strong className="text-cyan-300 font-mono">{personalInfo.email}</strong>.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`)}&body=${encodeURIComponent(formData.message)}`}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Click Here to Re-open Email App</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Big Data Engineering & Analytics Inquiry', projectType: 'ETL / ELT Data Pipeline', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Taylor"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Project Category</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="ETL / ELT Data Pipeline">ETL / ELT Data Pipeline</option>
                    <option value="Elasticsearch Analytics & Search">Elasticsearch Analytics & Search</option>
                    <option value="Logstash Telemetry & Ingestion">Logstash Telemetry & Ingestion</option>
                    <option value="FastAPI / Django Backend Microservice">FastAPI / Django Backend Microservice</option>
                    <option value="Full-Stack React Project">Full-Stack React Project</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">Message / Requirements *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your goals, tech stack, timeline, or questions..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50"
              >
                {loading ? (
                  <span>Opening Mail App...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to {personalInfo.email}</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>
      </div>

    </div>
  );
};
