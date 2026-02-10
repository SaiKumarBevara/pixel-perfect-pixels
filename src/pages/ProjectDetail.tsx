import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/lib/data";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p>Project not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="px-6 md:px-12 pt-12 pb-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/works" className="text-sm font-bold tracking-wider">YUYA</Link>
          <span className="text-xs text-muted-foreground">::</span>
        </div>

        <div className="flex justify-end mb-12">
          <div className="text-xs text-right space-y-1">
            <p><span className="text-muted-foreground">INDUSTRY:</span> <span className="font-medium">{project.industry}</span></p>
            <p><span className="text-muted-foreground">CLIENT:</span> <span className="font-medium">{project.client}</span></p>
            <p><span className="text-muted-foreground">YEAR:</span> <span className="font-medium">{project.year}</span></p>
            <p><span className="text-muted-foreground">EXPERIENCE:</span> <span className="font-medium">{project.experience}</span></p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex items-center gap-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-1/3 h-64 object-cover"
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              {project.title}
            </h1>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section className="px-6 md:px-12 py-16">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-6">
            <span className="section-label text-sm">about.</span>
            <a href="#" className="text-sm text-accent hover:underline">See It Live</a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl">
            {project.about}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <img
            src={project.detailImage}
            alt={`${project.title} detail`}
            className="w-full h-64 md:h-96 object-cover mt-8"
            loading="lazy"
          />
        </ScrollReveal>
      </section>

      {/* Challenge */}
      <section className="px-6 md:px-12 py-16">
        <ScrollReveal>
          <span className="section-label text-sm mb-6 block">challenge.</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl">
            {project.challenge}
          </p>
        </ScrollReveal>
      </section>

      {/* Results */}
      <section className="px-6 md:px-12 py-16">
        <ScrollReveal>
          <span className="section-label text-sm mb-6 block">results.</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl">
            {project.results}
          </p>
        </ScrollReveal>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-12 py-16">
        <ScrollReveal>
          <span className="section-label text-sm mb-8 block">testimonial.</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-secondary" />
            <div className="text-left">
              <p className="text-sm font-medium">Olivia Grant</p>
              <p className="text-xs text-accent">Founder & CEO</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* More to Explore */}
      <section className="px-6 md:px-12 py-16">
        <div className="flex items-center justify-between mb-6">
          <span className="section-label text-sm">more to explore.</span>
          <Link to="/works" className="text-sm border border-border px-4 py-1.5 hover:bg-secondary transition-colors">
            Show More
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(0, 2)
            .map((p) => (
              <Link key={p.slug} to={`/works/${p.slug}`} className="group block relative overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-lg font-semibold text-primary-foreground drop-shadow-lg">{p.title}</span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
