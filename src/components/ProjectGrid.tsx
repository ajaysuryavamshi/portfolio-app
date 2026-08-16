import React from 'react';
import Link from 'next/link';
import { projects } from '@/config/projects';
import { ArrowRight, ExternalLink, Zap } from 'lucide-react';

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-slate-400">Real-world impact through Quality Engineering.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.slug} 
              className="group bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                  {project.company}
                </span>
                <Zap size={16} className="text-slate-600 group-hover:text-yellow-400 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 flex-grow">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-400 rounded border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link 
                href={`/projects/${project.slug}`} 
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all w-full"
              >
                Read Full Case Study <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
