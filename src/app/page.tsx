import React from 'react';
import { Terminal, Cpu, Activity, ShieldCheck, ExternalLink, Github, Linkedin, FileText } from 'lucide-react';
import ProjectGrid from '@/components/ProjectGrid';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-blue-500/50 transition-colors h-full">
    <h3 className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
      <div className="w-2 h-2 bg-blue-500 rounded-full" />
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700 whitespace-nowrap">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Page() {
  const skills = [
    { title: 'Automation Engineering', skills: ['Selenium', 'Playwright', 'Cucumber', 'Rest-Assured', 'Appium', 'POM', 'Data-Driven'] },
    { title: 'DevOps & Infrastructure', skills: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Docker', 'Kubernetes', 'Git', 'Selenium Grid'] },
    { title: 'Performance & Reliability', skills: ['JMeter', 'LoadRunner', 'NeoLoad', 'JIRA', 'TestRail', 'PostgreSQL'] },
    { title: 'Methodologies', skills: ['Shift-Left', 'TDD', 'BDD', 'Agile/Scrum', 'Mentorship', 'QA Strategy'] },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Activity size={14} />
            <span>Available for Senior SDET roles</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Engineering Scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Quality Ecosystems
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Senior SDET with 13+ years of experience building high-performance automation frameworks. 
            I transform slow, flaky test suites into robust CI/CD assets that accelerate delivery.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all flex items-center gap-2">
              View Case Studies <ExternalLink size={18} />
            </a>
            <div className="flex gap-3">
              <a href="https://github.com/ajaysuryavamshi" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ajaysuryavamshi" className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:text-blue-400 transition-colors">
                <FileText size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Matrix Section */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">The Engineer&apos;s Toolbelt</h2>
            <p className="text-slate-400">A specialized stack focused on stability, speed, and scalability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map(cat => (
              <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectGrid />

      {/* About Section */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am a Quality Engineering leader with over 13 years of experience in the trenches of Telecom, Healthcare, and Finance. 
            My philosophy is simple: <strong className="text-white">Quality is not a phase; it is a design requirement.</strong>
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Throughout my career, I have focused on bridging the gap between development and QA. 
            I don&apos;t just find bugs; I build systems that prevent them from ever reaching production.
          </p>
        </div>
      </section>
    </div>
  );
}
