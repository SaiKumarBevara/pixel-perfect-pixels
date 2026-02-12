import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Copy } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import avatar from "@/assets/avatar.jpg";
import { projects } from "@/lib/data";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen px-6 md:px-12 pt-20 pb-12 flex flex-col justify-center">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase">
              Bevara
              <br />
              SAIKUMAR
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:block"
          >
            <img
              src={avatar}
              alt="Bevara Saikumar"
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover object-top"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mt-12 border-t border-border pt-8"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 md:mb-0">
            <span>bevarasaikumar121@gmail.com</span>
            <Copy size={12} className="cursor-pointer hover:text-foreground transition-colors" />
          </div>

          <p className="text-base md:text-lg max-w-md leading-relaxed text-muted-foreground font-serif italic text-justify">
            Hello, I'm a Mendix Advanced Certified Developer specializing in enterprise low-code and AI-driven solutions with 2+ years of experience — based in Hyderabad. Let's create!
          </p>
        </motion.div>
      </section>

      {/* Work Section */}
      <section className="px-6 md:px-12 pb-12">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-6">
            <span className="section-label text-sm">work.</span>
            <Link to="/works" className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border px-4 py-1.5">
              Show More
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.slice(0, 4).map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1} distance={30}>
              <Link to={`/works/${project.slug}`} className="group block relative overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-lg font-semibold text-primary-foreground drop-shadow-lg">
                    {project.title}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 py-20">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <span className="section-label text-sm">about.</span>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border px-4 py-1.5">
              Show More
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-justify" style={{ maxWidth: '728px' }}>
            I collaborate with businesses of all sizes to build scalable Mendix applications using modern integrations and automation. My work spans healthcare, pharma, and FMCG, focusing on reliability, performance, and long-term value.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-16 flex flex-col md:flex-row items-center md:items-end gap-8 justify-center">
            <img
              src={avatar}
              alt="Designer portrait"
              className="w-64 md:w-80 object-cover"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground text-justify" style={{ maxWidth: '311px' }}>
              I'm dedicated to building clean, maintainable Mendix solutions that align with business goals and support long-term growth.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Index;
