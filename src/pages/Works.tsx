import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { projects } from "@/lib/data";

const Works = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="px-6 md:px-12 pt-12 pb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold tracking-wider">YUYA</span>
          <span className="text-xs text-muted-foreground">::</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.9] tracking-tighter uppercase"
        >
          WORK
          <span className="text-accent">.</span>
        </motion.h1>

        <div className="flex justify-end mt-4">
          <span className="text-sm text-muted-foreground">work 2020 - 2024</span>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
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
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Works;
