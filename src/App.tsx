/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Home as HomeIcon, 
  Smartphone, 
  Palette, 
  Layers, 
  Cpu, 
  Terminal, 
  Zap, 
  ArrowLeft, 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Layout, 
  PenTool, 
  Mail, 
  Linkedin, 
  Send,
  Github,
  Twitter,
  Instagram,
  Box,
  Rocket,
  ChevronRight,
  Cloud,
  Database,
  Brush,
  MousePointer2,
  Info,
  ExternalLink,
  Link as LinkIcon,
  LayoutGrid,
  User,
  DraftingCompass,
  ArrowUpRight,
  Sun,
  Moon,
  FileText
} from "lucide-react";
import { useState, useEffect, FormEvent } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

const Navbar = ({ version, theme, setTheme }: { 
  version: 'A' | 'B', 
  theme: 'light' | 'dark', 
  setTheme: (theme: 'light' | 'dark') => void 
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (version === 'A') {
    return (
      <aside className="fixed left-0 top-0 h-screen w-20 border-r border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark z-50 flex flex-col items-center py-8 justify-between">
        <div className="flex flex-col items-center gap-8">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <nav className="flex flex-col gap-6 items-center">
            <Link to="/" className="group relative flex items-center justify-center p-2 rounded hover:bg-primary/10 transition-colors" title="Home">
              <LayoutGrid className="text-slate-600 dark:text-slate-400 group-hover:text-primary" size={24} />
            </Link>
            <Link to={isHome ? "#about" : "/#about"} className="group relative flex items-center justify-center p-2 rounded hover:bg-primary/10 transition-colors" title="About" onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <User className="text-slate-600 dark:text-slate-400 group-hover:text-primary" size={24} />
            </Link>
            <Link to="/projects" className="group relative flex items-center justify-center p-2 rounded hover:bg-primary/10 transition-colors" title="Projects">
              <DraftingCompass className="text-slate-600 dark:text-slate-400 group-hover:text-primary" size={24} />
            </Link>
            <Link to={isHome ? "#contact" : "/#contact"} className="group relative flex items-center justify-center p-2 rounded hover:bg-primary/10 transition-colors" title="Contact" onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <Mail className="text-slate-600 dark:text-slate-400 group-hover:text-primary" size={24} />
            </Link>
            <a 
              href="https://mrinalrajl.github.io/Mrinal12324.github.io/resume/Lakkimsetty_Mrinal_Raj_Resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="group relative flex items-center justify-center p-2 rounded hover:bg-primary/10 transition-colors"
              title="Resume"
            >
              <FileText className="text-slate-600 dark:text-slate-400 group-hover:text-primary" size={24} />
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-8">
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors text-slate-600 dark:text-slate-400 hover:text-primary"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <div className="vertical-text flex items-center gap-4 text-xs font-bold tracking-widest text-slate-400 uppercase">
            <span>SCROLL TO EXPLORE</span>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-700"></div>
          </div>
        </div>
      </aside>
    );
  }

  const styles = {
    nav: "bg-white dark:bg-black border-4 border-black dark:border-white rounded-none px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]",
    link: "text-sm font-black uppercase tracking-tighter transition-colors hover:bg-[#00FF00] hover:text-black px-2 py-1",
    activeLink: "text-sm font-black uppercase tracking-tighter bg-[#00FF00] text-black px-2 py-1 border-2 border-black dark:border-white",
    logo: "size-10 bg-black dark:bg-white rounded-none flex items-center justify-center text-[#00FF00] dark:text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
    header: "fixed top-0 w-full z-50 px-4 py-4 lg:px-10"
  };

  return (
    <header className={styles.header}>
      <nav className={`flex items-center justify-between max-w-7xl mx-auto ${styles.nav}`}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className={styles.logo}>
            <Box size={24} />
          </div>
          <h2 className="text-xl font-black tracking-tighter italic text-black dark:text-white">MRINAL</h2>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={location.pathname === "/" ? styles.activeLink : styles.link}>HOME</Link>
          <Link to="/projects" className={location.pathname === "/projects" ? styles.activeLink : styles.link}>PROJECTS</Link>
          <Link 
            to={isHome ? "#about" : "/#about"} 
            className={styles.link}
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            ABOUT
          </Link>
          <Link 
            to={isHome ? "#contact" : "/#contact"} 
            className={styles.link}
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            CONTACT
          </Link>
          <a 
            href="https://mrinalrajl.github.io/Mrinal12324.github.io/resume/Lakkimsetty_Mrinal_Raj_Resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className={styles.link}
          >
            RESUME
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 border-4 border-black dark:border-white hover:bg-[#00FF00] hover:text-black transition-all text-black dark:text-white"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

const Hero = ({ version }: { version: 'A' | 'B' }) => {
  if (version === 'A') {
    return (
      <section id="hero" className="min-h-screen flex flex-col justify-center px-12 md:px-24">
        <div className="max-w-6xl">
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Data / UX Analyst & Product Designer</span>
          <h1 className="text-7xl md:text-[10rem] font-extrabold leading-none tracking-tighter text-slate-900 dark:text-slate-100 mb-8">
            MRINAL<span className="text-primary">.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-xl md:text-3xl max-w-2xl leading-tight font-light text-slate-700 dark:text-slate-300">
              BRIDGING THE GAP BETWEEN <span className="font-bold underline decoration-primary decoration-4 underline-offset-8 italic">DATA INSIGHTS</span> AND HUMAN-CENTERED DESIGN.
            </p>
            <div className="flex gap-4">
              <Link className="px-8 py-4 bg-primary text-white font-bold rounded uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-2" to="/projects">
                VIEW PROJECTS <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (version === 'B') {
    return (
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden bg-white dark:bg-black">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative z-10 flex flex-col items-start text-left max-w-7xl w-full"
        >
          <div className="flex flex-col md:flex-row items-end gap-8 mb-12">
            <div className="size-48 bg-[#00FF00] border-8 border-black dark:border-white flex items-center justify-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
              <span className="text-[120px] font-black leading-none text-black">M</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2">
                MRINAL RAJ
              </h1>
              <p className="text-2xl font-black uppercase tracking-widest bg-[#00FF00] text-black border-4 border-black dark:border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                DATA / UX ANALYST & PRODUCT DESIGNER
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            <div className="border-4 border-black dark:border-white p-6 bg-white dark:bg-black text-black dark:text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <span className="text-xs font-black uppercase mb-2 block underline">01 / ANALYTICS</span>
              <p className="font-bold">PYTHON, SQL & TABLEAU</p>
            </div>
            <div className="border-4 border-black dark:border-white p-6 bg-[#00FF00] text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <span className="text-xs font-black uppercase mb-2 block underline">02 / DESIGN</span>
              <h4 className="font-bold">FIGMA & ADOBE XD</h4>
            </div>
            <div className="border-4 border-black dark:border-white p-6 bg-black dark:bg-white text-white dark:text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <span className="text-xs font-black uppercase mb-2 block underline">03 / PRODUCT</span>
              <p className="font-bold">KPIs & USER RESEARCH</p>
            </div>
          </div>

          <Link 
            to="/projects"
            className="px-12 py-6 bg-[#00FF00] text-black border-4 border-black font-black uppercase text-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-4"
          >
            VIEW ALL PROJECTS <ArrowUpRight size={32} />
          </Link>
        </motion.div>
      </section>
    );
  }

  return null;
};

const About = ({ version }: { version: 'A' | 'B' }) => {
  if (version === 'A') {
    return (
      <section id="about" className="bg-primary text-white py-32 px-12 md:px-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Zap className="text-[20rem]" size={320} />
        </div>
        <div className="max-w-4xl relative z-10">
          <h2 className="text-6xl font-black uppercase mb-12 tracking-tighter">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div>
              <span className="text-white/60 font-bold mb-4 block">01</span>
              <h4 className="text-2xl font-bold mb-2 uppercase">Data Analytics</h4>
              <p className="text-white/80">Cleaning complex datasets using Python and SQL to define KPIs and communicate insights to stakeholders.</p>
            </div>
            <div>
              <span className="text-white/60 font-bold mb-4 block">02</span>
              <h4 className="text-2xl font-bold mb-2 uppercase">UX Research</h4>
              <p className="text-white/80">Synthesizing behavioral and transactional data to inform personas, journey maps, and measurable UX improvements.</p>
            </div>
            <div>
              <span className="text-white/60 font-bold mb-4 block">03</span>
              <h4 className="text-2xl font-bold mb-2 uppercase">Product Design</h4>
              <p className="text-white/80">Crafting high-performance digital experiences with a focus on fluid animations and intuitive user journeys.</p>
            </div>
            <div>
              <span className="text-white/60 font-bold mb-4 block">04</span>
              <h4 className="text-2xl font-bold mb-2 uppercase">Visualization</h4>
              <p className="text-white/80">Building Tableau and Power BI dashboards to monitor engagement metrics and support data-driven decisions.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (version === 'B') {
    return (
      <section id="about" className="py-32 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl font-black mb-2 uppercase italic text-black dark:text-white">Identity / <span className="bg-[#00FF00] text-black px-2">Bio</span></h2>
          <div className="h-4 w-48 bg-black dark:bg-white"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-4 border-black dark:border-white">
          <div className="md:col-span-2 p-12 border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white">
            <span className="text-xs font-black uppercase mb-4 block underline">The Mission</span>
            <h3 className="text-4xl font-black mb-8 leading-tight uppercase">Bridging Data Insights and Human Design.</h3>
            <p className="text-xl font-bold leading-relaxed">
              I clean data, define KPIs, and build dashboards to communicate insights to non-technical stakeholders, while crafting high-performance digital experiences with a focus on intuitive user journeys.
            </p>
          </div>

          <div className="md:col-span-1 border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white bg-black dark:bg-white p-1 flex items-center justify-center overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF7SwcoGaRKLppd5cqFBLHsWlB5ywFO8aVUmx8nutp6NCfTVgNWkzh8d8vMWFNyox8THosfBFHOCCo5j_CRJ1a3tA_gpbnFfMqZhFHKYrGaZE0IyyXO-mE8zc4Yge3_shF8rrRJZY6YUYVeiTZUQji4doMJjYV6I3RtX6-vLwBXXFyWKUYAiK_3_qC6QWDbo9pOhCY_07PTgzPgmW-4YPjuoEbNS7cSKT_EIEmOu0TE1JSOLwE-7dA30qfmRWjhYSIyf2rU4g9JBA"
              alt="Developer Avatar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>

          <div className="md:col-span-1 flex flex-col">
            <div className="flex-1 p-8 border-b-4 border-black dark:border-white bg-[#00FF00] text-black">
              <Zap size={48} className="mb-4" />
              <p className="text-5xl font-black">8%</p>
              <p className="text-xs font-black uppercase">Open Rate Lift</p>
            </div>
            <div className="flex-1 p-8 bg-white dark:bg-black text-black dark:text-white flex flex-col justify-center gap-4">
              <div className="flex gap-2">
                <div className="size-10 bg-black dark:bg-white text-[#00FF00] dark:text-black flex items-center justify-center"><Terminal size={20} /></div>
                <div className="size-10 bg-black dark:bg-white text-[#00FF00] dark:text-black flex items-center justify-center"><Palette size={20} /></div>
                <div className="size-10 bg-black dark:bg-white text-[#00FF00] dark:text-black flex items-center justify-center"><Database size={20} /></div>
              </div>
              <p className="text-xs font-black uppercase">Analytics & UX Stack</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

const Projects = ({ version }: { version: 'A' | 'B' }) => {
  const projects = [
    {
      id: "01",
      category: "iOS Development / SwiftUI",
      title: "Swift Challenge",
      description: "Multi-user iOS navigation application with intelligent route suggestions and collaborative wayfinding.",
      tags: ["SwiftUI", "Swift", "iOS"],
      color: "text-primary",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "02",
      category: "UX Design / Case Study",
      title: "UNC Charlotte Redesign",
      description: "Comprehensive digital redesign of the student admissions and financial aid platform.",
      tags: ["UX Research", "Figma", "KPIs"],
      color: "text-accent-violet",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "03",
      category: "Analytics & UX",
      title: "Study Synergy",
      description: "UX flows and usage log analysis to measure adoption and translate insights into product features.",
      tags: ["Analytics", "UX", "Prototyping"],
      color: "text-white",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "04",
      category: "Software Engineering",
      title: "TRST01 Platform",
      description: "High-transaction platform optimization resulting in a 25% operational efficiency gain.",
      tags: ["Python", "JS", "PostgreSQL"],
      color: "text-primary",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  if (version === 'A') {
    return (
      <section id="projects" className="px-12 md:px-24 pb-32">
        <div className="flex items-center justify-between mb-16 border-b-2 border-slate-900 dark:border-slate-100 pb-4">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Selected Works</h2>
          <span className="text-slate-500 font-medium">{projects.length.toString().padStart(2, '0')} PROJECTS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <Link to="/projects" key={project.id} className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800 rounded-lg">
                <div 
                  className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 bg-cover bg-center" 
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500"></div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mt-1 uppercase text-xs tracking-widest font-bold">{project.category}</p>
                </div>
                <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform text-primary" size={32} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  if (version === 'B') {
    return (
      <section id="projects" className="py-32 bg-white dark:bg-black border-y-8 border-black dark:border-white">
        <div className="px-4 max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-6xl font-black uppercase italic leading-none text-black dark:text-white">Featured / <span className="bg-black dark:bg-white text-[#00FF00] dark:text-black px-2">Work</span></h2>
            <div className="h-4 w-48 bg-black dark:bg-white mt-4"></div>
          </div>
          <Link 
            to="/projects"
            className="flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-[#00FF00] dark:text-black font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            VIEW ALL ARTIFACTS <ExternalLink size={20} />
          </Link>
        </div>

        <div className="px-4 max-w-7xl mx-auto flex flex-col gap-12">
          {projects.map((project, i) => (
            <Link to="/projects" key={project.id}>
              <motion.div 
                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row border-8 border-black dark:border-white bg-white dark:bg-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] group overflow-hidden"
              >
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-between border-b-8 md:border-b-0 md:border-r-8 border-black dark:border-white text-black dark:text-white">
                  <div>
                    <span className="text-xs font-black uppercase mb-4 block underline">PROJECT {project.id}</span>
                    <h3 className="text-5xl font-black mb-6 uppercase italic">{project.title}</h3>
                    <p className="text-xl font-bold leading-relaxed mb-8">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-[400px] relative bg-black dark:bg-white overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-32 bg-card-dark/50 overflow-hidden">
      <div className="px-4 max-w-7xl mx-auto mb-16 flex justify-between items-end">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2">Featured <span className="text-accent-violet">Case Studies</span></h2>
          <div className="h-1 w-20 bg-accent-violet rounded-full"></div>
        </motion.div>
        <div className="flex gap-4">
          <Link 
            to="/projects"
            className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 text-primary text-sm font-bold hover:bg-primary/5 transition-all mr-4"
          >
            View All <ExternalLink size={14} />
          </Link>
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors active:scale-90"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors active:scale-90"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative px-4 max-w-7xl mx-auto">
        <motion.div 
          animate={{ x: `calc(-${index * 100}% - ${index * 2}rem)` }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="flex gap-8"
        >
          {projects.map((project, i) => (
            <Link 
              to="/projects"
              key={project.id}
              className="min-w-full md:min-w-[calc(100%-4rem)] lg:min-w-[800px] h-[450px] shrink-0"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full h-full glass rounded-3xl p-8 flex flex-col md:flex-row gap-8 group cursor-pointer"
              >
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className={`${project.color} font-bold text-xs tracking-widest uppercase`}>
                      {project.id} / {project.category}
                    </span>
                    <h3 className="text-3xl font-bold mt-4 mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm">{project.description}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative h-48 md:h-auto">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:-translate-y-4"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = ({ version }: { version: 'A' | 'B' }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Captured Email (Version B):", email);
      setSubmitted(true);
    }
  };

  if (version === 'A') {
    return (
      <footer id="contact" className="px-12 md:px-24 py-20 bg-background-light dark:bg-background-dark">
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-slate-200 dark:border-slate-800 pt-12">
          <div className="max-w-sm">
            <h4 className="text-3xl font-black uppercase tracking-tighter mb-4">Let's build something experimental</h4>
            <a className="text-primary font-bold text-xl underline underline-offset-8" href="mailto:lakkmrinal@gmail.com">lakkmrinal@gmail.com</a>
          </div>
          <div className="mt-12 md:mt-0 flex flex-col items-end gap-2">
            <div className="flex gap-6">
              <a className="font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors" href="https://www.linkedin.com/in/l-mrinal-raj" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors" href="https://github.com/mrinalrajl" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <p className="text-slate-400 text-[10px] tracking-[0.3em] uppercase mt-4">© 2026 MRINAL RAJ ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    );
  }

  if (version === 'B') {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center p-8 bg-white dark:bg-black border-t-8 border-black dark:border-white">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl w-full border-8 border-black dark:border-white p-12 md:p-20 bg-white dark:bg-black shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] dark:shadow-[24px_24px_0px_0px_rgba(255,255,255,1)] relative"
        >
          <div className="absolute -top-12 -left-12 size-24 bg-[#00FF00] border-4 border-black dark:border-white flex items-center justify-center rotate-12">
            <Rocket size={48} className="text-black" />
          </div>

          <div className="flex flex-col items-start gap-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-none text-left text-black dark:text-white">
              READY TO <br/> <span className="bg-black dark:bg-white text-[#00FF00] dark:text-black px-4">LAUNCH?</span>
            </h2>

            <p className="text-2xl font-bold text-left max-w-2xl text-black dark:text-white">
              I'm currently looking for new opportunities and collaborations. Let's create something extraordinary together.
            </p>

            <form className="w-full flex flex-col gap-8" onSubmit={handleSubmit}>
              {!submitted ? (
                <>
                  <div className="flex flex-col gap-4">
                    <label className="text-xs font-black uppercase underline text-black dark:text-white">Your Email Address</label>
                    <input 
                      className="w-full bg-white dark:bg-black border-4 border-black dark:border-white px-8 py-6 focus:bg-[#00FF00] focus:text-black transition-all outline-none font-black text-2xl uppercase placeholder:text-black/20 dark:placeholder:text-white/20 text-black dark:text-white" 
                      placeholder="HELLO@EXAMPLE.COM" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="w-full bg-black dark:bg-white text-[#00FF00] dark:text-black font-black uppercase py-8 text-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    SEND TRANSMISSION
                  </button>
                </>
              ) : (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full border-4 border-black dark:border-white p-8 bg-[#00FF00] text-black text-center"
                >
                  <h3 className="text-4xl font-black uppercase italic mb-2">TRANSMISSION RECEIVED</h3>
                  <p className="font-bold uppercase">Email Captured: {email}</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-black uppercase underline"
                  >
                    Send Another?
                  </button>
                </motion.div>
              )}
            </form>

            <div className="flex flex-wrap gap-8 border-t-4 border-black dark:border-white pt-8 w-full">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/l-mrinal-raj" },
                { name: "GitHub", url: "https://github.com/mrinalrajl" }
              ].map((social) => (
                <a key={social.name} className="text-xl font-black uppercase hover:bg-[#00FF00] hover:text-black px-2 transition-all text-black dark:text-white" href={social.url} target="_blank" rel="noreferrer">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return null;
};

const ProjectsPage = ({ version }: { version: 'A' | 'B' }) => {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      id: "01",
      category: "iOS Development",
      title: "Swift Challenge",
      description: "Developing a multi-user iOS navigation application with intelligent route suggestions and collaborative wayfinding features using Swift and SwiftUI.",
      tags: ["SwiftUI", "Swift", "iOS"],
      techStack: ["Swift", "SwiftUI", "CoreLocation", "MapKit"],
      stats: { exp: "iOS", live: "Beta" },
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "02",
      category: "UX Design",
      title: "UNC Charlotte Redesign",
      description: "Led requirements gathering and analysis for a large, complex student admissions platform, synthesizing behavioral and transactional data to inform personas and journey maps.",
      tags: ["UX Research", "Figma", "KPIs"],
      techStack: ["Figma", "Adobe XD", "User Research", "KPI Definition"],
      stats: { exp: "UX", live: "Case" },
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "03",
      category: "Analytics & UX",
      title: "Study Synergy",
      description: "Built UX flows/prototypes and analyzed usage logs to measure session length and feature adoption; translated insights into product recommendations.",
      tags: ["Analytics", "UX", "Prototyping"],
      techStack: ["Python", "Excel", "Prototyping", "Data Analysis"],
      stats: { exp: "Data", live: "UX" },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "04",
      category: "Software Engineering",
      title: "TRST01 Platform",
      description: "Developed production features using Python, JavaScript, PostgreSQL, and REST APIs, including data extraction and transformation routines that improved data quality.",
      tags: ["Python", "JS", "PostgreSQL"],
      techStack: ["Python", "JavaScript", "PostgreSQL", "REST API", "Agile"],
      stats: { exp: "Eng", live: "25%" },
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "05",
      category: "Data Science",
      title: "Smart Knower Analytics",
      description: "Built Tableau/Power BI dashboards to monitor open rates, click-through rates, and audience segmentation; contributed to an 8% lift in opens.",
      tags: ["Tableau", "Power BI", "Python"],
      techStack: ["Tableau", "Power BI", "Python", "Excel", "EDA"],
      stats: { exp: "Data", live: "12%" },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "06",
      category: "Product Design",
      title: "Instagram Redesign",
      description: "Designed surveys, synthesized results, and visualized pre/post engagement metrics to communicate redesign impact for Instagram highlights.",
      tags: ["Product Design", "Metrics", "Visualization"],
      techStack: ["Survey Design", "Data Visualization", "Figma", "Excel"],
      stats: { exp: "Design", live: "Metrics" },
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const currentProject = allProjects[activeProject];

  if (version === 'B') {
    return (
      <section id="projects-page" className="relative h-screen flex flex-col bg-white dark:bg-black pt-20 font-mono">
        <div className="flex-grow flex flex-col md:flex-row overflow-hidden border-t-4 border-black dark:border-white">
          {/* Left Column: Data Grid List */}
          <aside className="w-full md:w-1/2 border-r-4 border-black dark:border-white overflow-y-auto no-scrollbar">
            <div className="sticky top-0 bg-black dark:bg-white text-[#00FF00] dark:text-black p-4 border-b-4 border-black dark:border-white z-20 flex justify-between items-center">
              <h1 className="text-xl font-black uppercase italic">Artifact_Database.v1</h1>
              <span className="text-xs font-black">TOTAL_ENTRIES: 06</span>
            </div>
            
            <div className="flex flex-col">
              <div className="grid grid-cols-4 p-4 border-b-2 border-black dark:border-white bg-slate-100 dark:bg-slate-900 text-[10px] font-black uppercase tracking-tighter italic opacity-60 text-black dark:text-white">
                <span>ID</span>
                <span className="col-span-2">TITLE / CATEGORY</span>
                <span className="text-right">STATUS</span>
              </div>
              {allProjects.map((project, index) => (
                <div 
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`grid grid-cols-4 p-6 border-b-2 border-black dark:border-white cursor-pointer transition-all ${
                    activeProject === index ? "bg-[#00FF00] text-black" : "bg-white dark:bg-black hover:bg-slate-50 dark:hover:bg-slate-900 text-black dark:text-white"
                  }`}
                >
                  <span className="font-black">#{project.id}</span>
                  <div className="col-span-2">
                    <p className="font-black uppercase leading-none mb-1">{project.title}</p>
                    <p className="text-[10px] opacity-60 uppercase">{project.category}</p>
                  </div>
                  <div className="flex justify-end items-center">
                    <div className={`size-3 border-2 border-black dark:border-white ${activeProject === index ? 'bg-black animate-pulse' : 'bg-white dark:bg-black'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Right Column: Detailed Technical View */}
          <main className="flex-grow p-12 overflow-y-auto bg-slate-50 dark:bg-slate-900 relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <motion.div 
              key={activeProject}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10"
            >
              <div className="flex flex-col md:flex-row gap-12 mb-12">
                <div className="w-full md:w-1/2 border-8 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] bg-black dark:bg-white overflow-hidden aspect-square">
                  <img 
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover grayscale contrast-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow flex flex-col gap-6">
                  <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-4 border-black dark:border-white">
                    <span className="text-xs font-black uppercase mb-2 block text-[#00FF00] dark:text-black">System_Report</span>
                    <h2 className="text-5xl font-black uppercase italic leading-none">{currentProject.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-4 border-black dark:border-white p-4 bg-white dark:bg-black text-black dark:text-white">
                      <span className="text-[10px] font-black uppercase opacity-60 block mb-1">Complexity</span>
                      <p className="text-3xl font-black">{currentProject.stats.exp}</p>
                    </div>
                    <div className="border-4 border-black dark:border-white p-4 bg-[#00FF00] text-black">
                      <span className="text-[10px] font-black uppercase opacity-60 block mb-1">Active_Users</span>
                      <p className="text-3xl font-black">{currentProject.stats.live}K</p>
                    </div>
                  </div>

                  <div className="border-4 border-black dark:border-white p-6 bg-white dark:bg-black text-black dark:text-white">
                    <span className="text-xs font-black uppercase mb-4 block underline">Abstract</span>
                    <p className="font-bold leading-relaxed">{currentProject.description}</p>
                  </div>
                </div>
              </div>

              <div className="border-4 border-black dark:border-white bg-white dark:bg-black">
                <div className="p-4 border-b-4 border-black dark:border-white bg-black dark:bg-white text-[#00FF00] dark:text-black font-black uppercase text-xs">
                  Technical_Stack_Modules
                </div>
                <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {currentProject.techStack.map(tech => (
                    <div key={tech} className="border-2 border-black dark:border-white p-3 text-center font-black uppercase text-xs hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors text-black dark:text-white">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </section>
    );
  }

  return (
    <section id="projects-page" className="relative h-screen flex flex-col lg:flex-row overflow-hidden bg-background-light dark:bg-background-dark pt-20 text-slate-900 dark:text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-grid-pattern bg-grid-animate"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background-light/50 dark:via-background-dark/50 to-background-light dark:to-background-dark pointer-events-none"></div>

      {/* Left Column: Projects List */}
      <aside className="relative z-10 w-full lg:w-1/3 xl:w-1/4 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm overflow-y-auto no-scrollbar">
        <div className="p-8 pb-4">
          <div className="flex gap-4 items-center mb-6">
            <div className="size-12 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20 relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlPAtvjuqZtEtUe8gp-0K2eE1M3tdpoa3bi74d2s3VNNipXR5h6F8faOP6ptcShA9XAaYUNUp_qWM7htpIUy-2QU0KVDY_tJftgO24Ny1H2aG92w_BG-tlOqNULu8lBwr0-tHrPt26Mrw6N-FM7imQ4nHiNN8bcKDEAqUe8HTdeEKm2a1mq8pteKBm15QUO3KSeAJtpgCSfJEd33BBHtr6mPhyHqETBGJrOIcT5lIQMir7bg5xMb4w7hYdm-QoyqDMhCEfKwMLV-o" 
                alt="Mrinal" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-slate-900 dark:text-white text-xl font-bold">Artifacts</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Select to explore</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-grow gap-1 px-4 pb-8">
          {allProjects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`group flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 border-l-2 ${
                activeProject === index 
                  ? "bg-primary/10 border-primary shadow-[inset_0_0_20px_rgba(19,55,236,0.1)]" 
                  : "border-transparent hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg transition-colors ${
                  activeProject === index ? "bg-slate-200 dark:bg-slate-800 text-primary" : "bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 group-hover:text-primary"
                }`}>
                  <Box size={20} />
                </div>
                <div>
                  <p className={`font-bold transition-transform group-hover:translate-x-1 ${
                    activeProject === index ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-200"
                  }`}>{project.title}</p>
                  <p className="text-slate-500 text-xs">{project.category}</p>
                </div>
              </div>
              <ChevronRight size={14} className={`transition-all ${
                activeProject === index ? "opacity-100 text-slate-900 dark:text-white" : "opacity-0 group-hover:opacity-100 text-slate-400 dark:text-slate-600"
              }`} />
            </div>
          ))}
        </div>

        <div className="p-6 mt-auto">
          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/50">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Project Status</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Live in Production</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Column: Interactive Visual Space */}
      <section className="relative z-10 flex-grow flex flex-col items-center justify-center p-6 lg:p-12 overflow-hidden">
        {/* Tech Stack Pane */}
        <motion.div 
          key={`pane-${activeProject}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-10 right-10 z-20 w-80 glass-panel rounded-2xl p-6 hidden xl:block border border-slate-200 dark:border-white/10"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-primary font-bold text-lg">Tech Stack</h3>
            <Info size={18} className="text-slate-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            {currentProject.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Central Visual */}
        <div className="relative w-full h-full max-w-4xl max-h-[600px] flex items-center justify-center">
          <motion.div 
            key={`swarm-${activeProject}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="particle-swarm w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-80"
          ></motion.div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              key={`img-${activeProject}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/50 to-accent-violet opacity-30 blur-3xl rounded-full animate-pulse"></div>
              <img 
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen opacity-90 drop-shadow-[0_0_15px_rgba(19,55,236,0.5)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Project Description Overlay */}
          <motion.div 
            key={`desc-${activeProject}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-lg glass-panel rounded-2xl p-6 text-center transform transition-all hover:scale-105 duration-300 border border-slate-200 dark:border-white/10"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{currentProject.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              {currentProject.description}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex justify-center gap-6">
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary">{currentProject.stats.exp}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Complexity</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-accent-violet">{currentProject.stats.live}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Users</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interaction Hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <MousePointer2 size={24} className="animate-bounce text-primary" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Select project to view details</span>
        </div>
      </section>
    </section>
  );
};

const HomePage = ({ version }: { version: 'A' | 'B' }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Hero version={version} />
      {version === 'A' ? (
        <>
          <Projects version={version} />
          <About version={version} />
        </>
      ) : (
        <>
          <About version={version} />
          <Projects version={version} />
        </>
      )}
      <Contact version={version} />
    </div>
  );
};

export default function App() {
  const [version, setVersion] = useState<'A' | 'B'>('A');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-500 ${
        version === 'A' 
          ? 'bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100' 
          : 'bg-[#F0F0F0] dark:bg-[#0a0a0a] text-black dark:text-white font-mono'
      }`}>
        <Navbar version={version} theme={theme} setTheme={setTheme} />
        
        <main className={version === 'A' ? 'flex-1 ml-20 grid-pattern' : ''}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage version={version} />} />
              <Route path="/projects" element={<ProjectsPage version={version} />} />
            </Routes>
          </AnimatePresence>

          {version === 'B' && (
            <footer className="p-8 text-center text-sm font-medium border-t-4 border-black dark:border-white bg-white dark:bg-black relative z-10">
              <p>© 2024 Mrinal Raj Lakkimsetty. Crafted with precision in the digital space.</p>
            </footer>
          )}
        </main>

        {/* Controls Container */}
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
          {/* A/B Testing Toggle Button */}
          <button 
            onClick={() => setVersion(v => v === 'A' ? 'B' : 'A')}
            className={`flex items-center gap-3 px-6 py-4 font-black uppercase transition-all active:scale-95 ${
              version === 'A' 
                ? "bg-primary text-white rounded-full shadow-2xl hover:scale-110" 
                : "bg-[#00FF00] text-black border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            }`}
          >
            <Layout size={24} />
            <span>{version === 'A' ? 'B' : 'A'}</span>
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
}
