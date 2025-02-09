// Atoms/Input.tsx
export interface InputProps {
  type: string;
  name?: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const Input = ({ type, name, placeholder, value, onChange }: InputProps) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full p-4 rounded-md bg-[rgba(255,255,255,0.06)] text-white placeholder:text-gray-300 placeholder:text-sm placeholder:opacity-50 border border-transparent focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 focus:outline-none"
  />
);

export default Input;
