import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code2 } from 'lucide-react';

export default function Home() {
  // --- DATA SECTION: Update your details here ---
  
  const personalInfo = {
    name: "Prem Veer Singh",
    title: "Full Stack Software Developer",
    bio: "Building scalable web applications and seamless user experiences. Passionate about clean code, modern architectures, and solving complex problems.",
    email: "prem.veer2836@gmail.com", // Replace with real email
  };

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/PremveerSingh195" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/premveer-singh-b6766017a/" },
    { name: "X / Twitter", icon: <Twitter size={20} />, url: "https://x.com/Premvee56413547" },
    { name: "Email", icon: <Mail size={20} />, url: `mailto:${personalInfo.email}` },
  ];

  const projects = [
    {
      title: "Travel booking Frontend",
      description: "A comprehensive dashboard for managing products, orders, and analytics. Built with performance and scalability in mind.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      link: "https://travel-user.accessdashboard.live", 
    },
    {
      title: "Task Management API",
      description: "A robust RESTful API featuring authentication, real-time updates via WebSockets, and heavy data processing.",
      techStack: ["Node.js", "Express", "MongoDB", "Docker"],
      link: "#",
    },
    {
      title: "AI Chat Wrapper",
      description: "A SaaS wrapper for OpenAI API allowing users to organize chats into folders with custom system prompts.",
      techStack: ["React", "Firebase", "Stripe", "OpenAI API"],
      link: "#",
    },
  ];

  // --- RENDER SECTION ---

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-200">
      
      {/* Container to center content and limit width */}
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        
        {/* HERO SECTION */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-lg mb-8">
            {personalInfo.bio}
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all text-sm font-medium text-slate-700"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <hr className="border-slate-200 mb-16" />

        {/* PROJECTS SECTION */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-slate-800" />
            <h3 className="text-2xl font-bold text-slate-900">Featured Projects</h3>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <a 
                    href={project.link} 
                    className="text-slate-400 hover:text-slate-900"
                    target="_blank"
                   
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}