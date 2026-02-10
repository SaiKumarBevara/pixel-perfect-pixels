import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetInTouch = () => {
    if (location.pathname === "/contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Social Links */}
      <div className="px-6 md:px-12 pt-20 md:pt-32">
        <div className="flex justify-end gap-6 mb-20 text-sm">
          <a href="https://www.linkedin.com/in/bevara-sai-kumar-710b92217/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Linkedin</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Twitter</a>
          <a href="https://medium.com/@bevarasaikumar121" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Medium</a>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.3] max-w-3xl text-primary-foreground/60">
            Curious about what we can create together?
            <br />
            Let's bring something extraordinary to life!
          </h2>

          <div className="flex items-center gap-6 mt-10 pb-32">
            <button
              onClick={handleGetInTouch}
              className="border border-primary-foreground/30 px-8 py-3 text-sm hover:bg-primary-foreground hover:text-foreground transition-colors"
            >
              Get in Touch
            </button>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-foreground/80" />
              Available For Work
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between text-xs text-primary-foreground/50 gap-4">
        <div>
          <p>+81 (0)90 1234 5678</p>
          <p>bevarasaikumar121@gmail.com</p>
        </div>
        <div>
          <p>Designed & Developed</p>
          <p>by Peter Hodak</p>
        </div>
        <div className="md:text-right">
          <p>All rights reserved,</p>
          <p>SK ©2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
