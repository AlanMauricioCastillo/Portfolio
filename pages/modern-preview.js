import Head from 'next/head';
import { motion } from 'framer-motion';
import { I_am, links, skillsStikers, projects } from '../public/profile';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ModernPreview() {
  return (
    <div className="modern-reset min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500 selection:text-white overflow-x-hidden font-sans">
      <Head>
        <title>{I_am.name} - Modern Preview</title>
        <meta name="description" content="Modern Portfolio Preview" />
      </Head>

      {/* Navbar Placeholder */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              MC.
            </a>
          </Link>
          <div className="flex gap-6 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <Link href="/">
              <a className="text-purple-400 hover:text-purple-300 transition-colors">Back to Original</a>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section id="about" className="flex flex-col md:flex-row items-center gap-12 mb-32">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex-1 space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              Available for hire
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                {I_am.name}
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              {I_am.description}
            </p>
            
            <div className="flex gap-4 pt-4">
              <a 
                href={links.linkedIn.urlink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href={links.twetter.urlink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                Twitter
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="img_dev.gif" 
              alt="Developer" 
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center"
          >
            Tech Stack
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6"
          >
            {skillsStikers.map((skill, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:scale-105 transition-all cursor-pointer group"
              >
                <img src={skill.url} alt={skill.tec} className="w-10 h-10 mb-3 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" />
                <span className="text-xs text-gray-400 font-medium">{skill.tec}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Preview */}
        <section id="projects">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold mb-12"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
              >
                <div className="aspect-video w-full overflow-hidden bg-gray-800 relative">
                   {/* Fallback for image if local path is tricky, or just use the name */}
                   <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-black">
                      <span className="text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors">{project.name}</span>
                   </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
