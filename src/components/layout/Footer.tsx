import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* CTA Section */}
      <div className="px-6 md:px-12 py-20 md:py-32">
        <div className="flex justify-end gap-6 mb-16 text-sm">
          <a href="#" className="hover:text-accent transition-colors">Linkedin</a>
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="hover:text-accent transition-colors">Behance</a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl mb-12">
            Curious about what we can create together?
            <br />
            Let's bring something extraordinary to life!
          </h2>

          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="border border-primary-foreground/30 px-6 py-3 text-sm hover:bg-primary-foreground hover:text-foreground transition-colors"
            >
              Get in Touch
            </Link>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Available For Work
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between text-xs text-primary-foreground/50 gap-4">
        <div>
          <p>+81 (0)90 1234 5678</p>
          <p>hello@yuya.com</p>
        </div>
        <div>
          <p>Designed & Developed</p>
          <p>by Peter Hodak</p>
        </div>
        <div className="text-right">
          <p>All rights reserved,</p>
          <p>YUYA ©2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
