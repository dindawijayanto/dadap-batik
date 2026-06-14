/* Reusable button micro-component */
const Button = ({ children, variant = "primary", ...props }) => {
  const baseClass =
    "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer uppercase tracking-widest";
  const variants = {
    // Primary brown button as seen in CTA
    primary: "bg-[#4D342D] text-white hover:bg-[#6D493E]",
    // Secondary outline button
    secondary: "border border-[#A88877] text-[#4D342D] hover:bg-[#F2E5DD]",
    // Small dark button like 'Try On Batik' in Nav
    dark: "bg-[#4D342D] text-white hover:bg-black text-xs",

    tryOn:
      "bg-gradient-to-r from-[#B2993D] to-[#001020] text-white hover:opacity-90 hover:transition-opacity duration-300",
  };

  return (
    <button className={`${baseClass} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
