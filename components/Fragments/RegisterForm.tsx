"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

import InputForm from "@/components/Elements/Input";

export default function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Password and Confirm Password do not match.");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful!");
    router.push("/");
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          {/* Email Input */}
          <InputForm
            type="email"
            className="w-full p-4 rounded-md bg-[rgba(255,255,255,0.06)] text-white placeholder:text-gray-300 placeholder:text-sm placeholder:opacity-50 border border-transparent focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 focus:outline-none"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          {/* Username Input */}
          <InputForm
            type="text"
            className="w-full p-4 rounded-md bg-[rgba(255,255,255,0.06)] text-white placeholder:text-gray-300 placeholder:text-sm placeholder:opacity-50 border border-transparent focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 focus:outline-none"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          {/* Password Input */}
          <InputForm
            type={showPassword ? "text" : "password"}
            className="w-full p-4 rounded-md bg-[rgba(255,255,255,0.06)] text-white placeholder:text-gray-300 placeholder:text-sm placeholder:opacity-50 border border-transparent focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 focus:outline-none"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Toggle Button for Password Visibility */}
          <button type="button" className="absolute inset-y-0 right-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="mb-4 relative">
          {/* Confirm Password Input */}
          <InputForm
            type={showConfirmPassword ? "text" : "password"}
            className="w-full p-4 rounded-md bg-[rgba(255,255,255,0.06)] text-white placeholder:text-gray-300 placeholder:text-sm placeholder:opacity-50 border border-transparent focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 focus:outline-none"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* Toggle Button for Confirm Password Visibility */}
          <button type="button" className="absolute inset-y-0 right-3 flex items-center" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2 bg-gradient-to-r from-[#62CDCB] to-[#4599DB] hover:bg-blue-700 rounded-md text-lg font-semibold text-white transition-all duration-300 ${
            !email || !username || !password || !confirmPassword ? "opacity-50 cursor-not-allowed" : "hover:shadow-xl hover:shadow-[#4599DB]/50"
          }`}
          disabled={!email || !username || !password || !confirmPassword}
        >
          Register
        </button>
      </form>
    </>
  );
}
