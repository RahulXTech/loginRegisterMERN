import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          StudyMart
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-3 py-1 border rounded-lg"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-4 pb-4 space-y-2"
        >
          <Link to="/" className="block">Login</Link>
          <Link to="/register" className="block">Register</Link>
          <Link to="/dashboard" className="block">Dashboard</Link>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;