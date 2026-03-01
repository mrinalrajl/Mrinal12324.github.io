import { motion } from "motion/react";
import { 
  LayoutGrid, 
  User, 
  Layers, 
  Mail, 
  ArrowUpRight, 
  ArrowRight,
  Zap,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";
import { Link } from "react-router-dom";

export const NavbarB = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 border-r border-b-ink/10 bg-b-bg z-50 flex flex-col items-center py-8 justify-between">
      <div className="flex flex-col items-center gap-8">
        <Link to="/" className="w-10 h-10 bg-b-accent flex items-center justify-center rounded">
          <span className="text-white font-bold text-xl">M</span>
        </Link>
        <nav className="flex flex-col gap-6 items-center">
          <Link to="/" className="group relative flex items-center justify-center p-2 rounded hover:bg-b-accent/10 transition-colors">
            <LayoutGrid className="text-b-ink/60 group-hover:text-b-accent" size={24} />
          </Link>
          <a href="#about" className="group relative flex items-center justify-center p-2 rounded hover:bg-b-accent/10 transition-colors">
            <User className="text-b-ink/60 group-hover:text-b-accent" size={24} />
          </a>
          <Link to="/projects" className="group relative flex items-center justify-center p-2 rounded hover:bg-b-accent/10 transition-colors">
            <Layers className="text-b-ink/60 group-hover:text-b-accent" size={24} />
          </Link>
          <a href="#contact" className="group relative flex items-center justify-center p-2 rounded hover:bg-b-accent/10 transition-colors">
            <Mail className="text-b-ink/60 group-hover:text-b-accent" size={24} />
          </a>
        </nav>
      </div>
      <div className="b-vertical-text flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] text-b-ink/40 uppercase">
        <span>SCROLL TO EXPLORE</span>
        <div className="w-px h-12 bg-b-ink/20"></div>
      </div>
    </aside>
  );
};

export const HeroB = () => (
  <section className="min-h-screen flex flex-col justify-center px-12 md:px-24 relative overflow-hidden">
    <div className="absolute inset-0 b-grid-pattern -z-10"></div>
    <div className="max-w-6xl">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-b-accent font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
      >
        Designer & Developer
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-7xl md:text-[10rem] font-extrabold leading-none tracking-tighter text-b-ink mb-8"
      >
        MRINAL<span className="text-b-accent">.</span>
      </motion.h1>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-3xl max-w-2xl leading-tight font-light text-b-ink/80"
        >
          ARCHITECTING <span className="font-bold underline decoration-b-accent decoration-4 underline-offset-8 italic">DIGITAL EXPERIENCES</span> THROUGH BRUTALIST MINIMALISM AND EXPERIMENTAL CODE.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
        >
          <Link to="/projects" className="px-8 py-4 bg-b-accent text-white font-bold rounded uppercase tracking-widest hover:bg-b-accent/90 transition-all flex items-center gap-2">
            VIEW PROJECTS <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export const ProjectsB = () => {
  const projects = [
    {
      id: "01",
      category: "Creative Development / UI Design",
      title: "Synthesis 2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP4-omSXoYIxeaomasSfEIaWJ3IyX5fvNLiUdY7cB8_v5-KXkqJTMku1Qd5akRhWH56wpI-O7zG4KsjhT7SYuj7qu0w7sLzEGSTbmhfhYy72D8WQJaBQw4degT1Hc7Eoxw7LZVkj-QA7qLquOeLYfyQ81gWhoV2KEeRx1J3s6uWL52UiVzbLdDZ8DG_qctVTBte1veZldbl8eRGts6XLq_8yBKg7RQq5uD9ZtFXcCtFrNbO_1h387vHWK5WZ395rF1HkMPue1VAOI"
    },
    {
      id: "02",
      category: "Experimental UX / Frontend",
      title: "Neural Interface",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwPuM57whe75t648ZQ_T-_nqiix5u5w3ntcaQR3LNLjkndikYihYzVJoILnTkJvdVEsTpEk7K4t3lICLQurZbWNoYK20Uu9QzYn7fVZt1pWsHX02LLKHXdA2JXIRO10nie5pl00eULCZQ0ciPGZVjRsqOckK0joHKax_8bBp0hT-bORtz3eTmkEmCXsRVmGxff6MuuvkRMUyHQTtnRjEh0CXiustPwTYTf8RMp2zwJyLn06s7WwIl0P33V2UDkflcRY-Gq0kav2mc",
      mt: true
    },
    {
      id: "03",
      category: "Motion Design / WebGL",
      title: "Kinetic Type",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVw_fG9D8m65jTEAJKKEP5HnlDWrvwsqZYOoTfbJccsTRJbeC5dloq9gYPI9E5vOBlVzRk7wdlcIhyKwNZbLbh6a5E8jV5lf0nDjxTutxW8NpHOqQD78cUu9B3lPW2fWzxuH2PyQB8lY0bBxdStDoVnAdF55d_m8Z3-k50TbWyTu6ONHn5_YU_wvBbd8edmV0gI7PxGXOBz6UHv7Ia4ua9cFVGLt5Alqn-_zhPUe4tLvTh3fi9xmeQbknllbLpnymP5h9rJAKsBo8"
    },
    {
      id: "04",
      category: "Architecture / System Design",
      title: "Monolith UI",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0GaQQYvovAewZslqK6Y9sQLn3bpsp6cF7O6dZNqTK5YeZ8R5RK4J0_r12ptu0DfZ_QtsoWtna_eVMdRNnu7Jdc2grgDJ6x5wVW7o8AvgiOP12AcilP3K5ub3boHMwRPPn503zD552X7aaeR60Oqv4TdSafFiI7ssm3TOXUE7raDsm9FwNYDJTrsHTQajXpGftVaUM73Y_W3Yejvvven1fWIIGGUKlFuvLg-3BR2-98v6vI8Mp4v7jStMcXhrcmo1lbJiW9Ljf75E",
      mt: true
    }
  ];

  return (
    <section id="projects" className="px-12 md:px-24 pb-32">
      <div className="flex items-center justify-between mb-16 border-b-2 border-b-ink pb-4">
        <h2 className="text-4xl font-black uppercase tracking-tighter">Selected Works</h2>
        <span className="text-b-ink/50 font-medium">04 PROJECTS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group cursor-pointer ${project.mt ? 'md:mt-24' : ''}`}
          >
            <div className="relative aspect-video overflow-hidden bg-b-card rounded-lg">
              <img 
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-b-accent/0 group-hover:bg-b-accent/20 transition-all duration-500"></div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
                <p className="text-b-ink/50 mt-1 uppercase text-xs tracking-widest font-bold">{project.category}</p>
              </div>
              <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform text-b-accent" size={32} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const CapabilitiesB = () => (
  <section className="bg-b-accent text-white py-32 px-12 md:px-24 overflow-hidden relative">
    <div className="absolute top-0 right-0 p-12 opacity-10">
      <Zap size={320} strokeWidth={0.5} />
    </div>
    <div className="max-w-4xl relative z-10">
      <h2 className="text-6xl font-black uppercase mb-12 tracking-tighter">Core Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
        {[
          {
            num: "01",
            title: "Interface Engineering",
            desc: "Translating complex systems into seamless digital narratives using modern frameworks and performance-first architecture."
          },
          {
            num: "02",
            title: "Brand Strategy",
            desc: "Crafting visual identities that resonate with digital-native audiences through bold typography and minimal aesthetics."
          },
          {
            num: "03",
            title: "Interactive Design",
            desc: "Specializing in high-end motion, micro-interactions, and experimental user flows that push technological boundaries."
          },
          {
            num: "04",
            title: "Creative Direction",
            desc: "Guiding projects from conceptual genesis to final deployment with a strict focus on functional brutalism."
          }
        ].map((item) => (
          <div key={item.num}>
            <span className="text-white/60 font-bold mb-4 block">{item.num}</span>
            <h4 className="text-2xl font-bold mb-2 uppercase">{item.title}</h4>
            <p className="text-white/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const FooterB = () => (
  <footer className="px-12 md:px-24 py-20 bg-b-bg">
    <div className="flex flex-col md:flex-row justify-between items-end border-t border-b-ink/10 pt-12">
      <div className="max-w-sm">
        <h4 className="text-3xl font-black uppercase tracking-tighter mb-4">Let's build something experimental</h4>
        <a className="text-b-accent font-bold text-xl underline underline-offset-8" href="mailto:hello@mrinal.design">hello@mrinal.design</a>
      </div>
      <div className="mt-12 md:mt-0 flex flex-col items-end gap-2">
        <div className="flex gap-6">
          <a className="font-bold uppercase tracking-widest text-xs hover:text-b-accent transition-colors" href="#">Instagram</a>
          <a className="font-bold uppercase tracking-widest text-xs hover:text-b-accent transition-colors" href="#">Twitter</a>
          <a className="font-bold uppercase tracking-widest text-xs hover:text-b-accent transition-colors" href="#">LinkedIn</a>
        </div>
        <p className="text-b-ink/40 text-[10px] tracking-[0.3em] uppercase mt-4">© 2024 MRINAL ALL RIGHTS RESERVED</p>
      </div>
    </div>
  </footer>
);

export const HomePageB = () => (
  <div className="min-h-screen bg-b-bg ml-20">
    <HeroB />
    <section id="about" className="py-20"></section> {/* Spacer for nav anchor */}
    <ProjectsB />
    <CapabilitiesB />
    <FooterB />
  </div>
);

export const ProjectsPageB = () => {
  return (
    <div className="min-h-screen bg-b-bg ml-20 pt-32 pb-20 px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-4">Archive</h1>
          <p className="text-xl font-light text-b-ink/60">A comprehensive record of digital exploration.</p>
        </div>
        <ProjectsB />
      </div>
    </div>
  );
};
