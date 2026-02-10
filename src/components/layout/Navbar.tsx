import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid2x2 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { label: "Works", path: "/works" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-card/80 backdrop-blur-md border border-border px-6 py-3 rounded-full shadow-lg"
    >
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium transition-colors hover:text-accent ${
            location.pathname === item.path
              ? "text-foreground"
              : "text-muted-foreground"
          }`}
        >
          {item.label}
        </Link>
      ))}
      <Link
        to="/"
        className="w-8 h-8 flex items-center justify-center rounded-md border border-border hover:bg-secondary transition-colors"
      >
        <Grid2x2 size={14} />
      </Link>
    </motion.nav>
  );
};

export default Navbar;
