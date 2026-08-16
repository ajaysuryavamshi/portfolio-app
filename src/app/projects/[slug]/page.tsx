import React from 'react';
import { projects } from '@/config/projects';
import { notFound } from 'next/navigation';
import { CheckCircle2, ArrowLeft, Target, Tool, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 pb-24">
      {/* Top Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 text-blue-400 font-medium mb-4">
            <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs uppercase tracking-wider">
              Case Study
            </span>
            <span className="text-slate-500">•</span>
            <span>{project.company}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-start gap-4">
            <TrendingUp className="text-blue-400 shrink-0" size={24} />
            <p className="text-lg text-blue-100 leading-relaxed italic">
              &quot;{project.impactStatement}&quot;
            </p>
          </div>
        </header>

        {/* The STAR Method Grid */}
        <div className="grid grid-cols-1 gap-12">
          
          {/* Situation & Task */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-white font-semibold text-xl mb-2">
                <Target className="text-blue-400" size={24} />
                <h2>The Challenge</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {project.situation}
              </p>
            </section>
            
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-white font-semibold text-xl mb-2">
                <Zap className="text-blue-400" size={24} />
                <h2>The Objective</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {project.task}
              </p>
            </section>
          </div>

          {/* Action (The Engineering) */}
          <section className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl">
            <div className="flex items-center gap-3 text-white font-semibold text-2xl mb-6">
              <Tool className="text-blue-400" size={28} />
              <h2>The Engineering</h2>
            </div>
            <ul className="space-y-4">
              {project.action.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-300 leading-relaxed">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Result (The ROI) */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-white font-semibold text-2xl mb-2">
              <TrendingUp className="text-blue-400" size={28} />
              <h2>The Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.result.map((res, idx) => (
                <div key={idx} className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 leading-relaxed">
                  {res}
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="pt-12 border-t border-slate-800">
            <h3 className="text-slate-500 font-medium uppercase tracking-widest text-sm mb-6">Technical Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-900 text-slate-300 border border-slate-800 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
