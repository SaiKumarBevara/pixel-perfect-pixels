import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { label: "Works", path: "/works" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
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
