import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/sections/Marquee";
import { services, faqs } from "@/lib/data";
import avatar from "@/assets/avatar.jpg";
import aboutDesigner from "@/assets/about-designer.jpg";
import aboutPhotographer from "@/assets/about-photographer.jpg";

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Header */}
      <section className="px-6 md:px-12 pt-12 pb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold tracking-wider">YUYA</span>
          <span className="text-xs text-muted-foreground">::</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase text-center">
            YUME<span className="text-accent">.</span>
            <br />
            YASKUMI
          </h1>
        </motion.div>
      </section>

      {/* About Intro */}
      <section className="px-6 md:px-12 py-16">
        <div className="flex items-center justify-between mb-8">
          <span className="section-label text-sm">about.</span>
          <a href="#" className="text-sm text-accent hover:underline">Read.cv</a>
        </div>

        <ScrollReveal>
          <p className="text-xl md:text-2xl leading-relaxed max-w-xl">
            I collaborate with businesses of all sizes worldwide, using the latest technologies. My designs have also earned multiple awards.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <img
            src={aboutDesigner}
            alt="Designer at work"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <p className="text-sm text-muted-foreground leading-relaxed">
            I'm dedicated to crafting beautiful and highly functional designs that seamlessly align with my clients' unique needs and long-term goals.
          </p>
        </ScrollReveal>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 py-16">
        <span className="section-label text-sm mb-12 block">services.</span>

        <ScrollReveal className="flex flex-col items-center gap-2">
          {services.map((service, i) => (
            <ScrollReveal key={service} delay={i * 0.05}>
              <span className="text-3xl md:text-5xl lg:text-6xl font-black italic tracking-tight hover:text-accent transition-colors cursor-default">
                {service}
              </span>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </section>

      {/* Clients Marquee */}
      <Marquee />

      {/* Photos */}
      <section className="px-6 md:px-12 py-16">
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={aboutDesigner}
            alt="Working"
            className="w-full h-72 object-cover"
            loading="lazy"
          />
          <ScrollReveal delay={0.15}>
            <img
              src={aboutPhotographer}
              alt="Photography"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
          </ScrollReveal>
        </ScrollReveal>
      </section>

      {/* FAQs */}
      <section className="px-6 md:px-12 py-16">
        <span className="section-label text-sm mb-12 block">FAQs.</span>

        <div className="max-w-2xl mx-auto divide-y divide-border">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-sm font-medium pr-8">{faq.question}</span>
                <span className="text-lg shrink-0">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pb-6"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
