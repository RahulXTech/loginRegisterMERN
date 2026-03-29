import { motion } from "framer-motion";

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      type={type}
      onClick={onClick}
      className="w-full py-3 rounded-xl font-semibold text-white 
      bg-gradient-to-r from-indigo-500 to-blue-600 
      shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {text}
    </motion.button>
  );
};

export default Button;