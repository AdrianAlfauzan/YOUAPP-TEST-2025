export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({ children, type = "button", onClick, disabled }: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-2 bg-gradient-to-r from-[#62CDCB] to-[#4599DB] hover:bg-blue-700 rounded-md text-lg font-semibold text-white transition-all duration-300 ${
      disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-xl hover:shadow-[#4599DB]/50"
    }`}
  >
    {children}
  </button>
);

export default Button;
