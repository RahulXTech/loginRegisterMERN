const Input = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md 
      border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 
      outline-none transition-all"
    />
  );
};

export default Input;