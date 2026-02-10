import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest < 50);
  });

  const navItems = [
    { label: "Works", path: "/works" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 pointer-events-auto"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <Link to="/" className="text-sm font-black tracking-wider uppercase">
        YUYA
      </Link>

      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm transition-colors hover:text-foreground ${
              location.pathname === item.path
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <button className="flex items-center justify-center hover:opacity-70 transition-opacity">
          <Maximize2 size={16} strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
