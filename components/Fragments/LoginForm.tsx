"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

import InputForm from "@/components/Elements/Input";
import ButtonForm from "@/components/Elements/Button";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    {
      /*Validasi login*/
    }
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (email !== storedEmail || password !== storedPassword) {
      setErrorMessage("Invalid email or password.");
      return;
    }
    alert("Login successful!");
    router.push("/about");
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        {/* Email Input */}
        <div className="mb-4">
          <InputForm type="email" placeholder="Enter Username/Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        {/* Password Input  & button eye*/}
        <div className="mb-4 relative">
          <InputForm type={showPassword ? "text" : "password"} placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" className="absolute inset-y-0 right-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

        {/* Submit Button */}
        <ButtonForm type="submit" disabled={!email || !password}>
          Login
        </ButtonForm>
      </form>
    </>
  );
}
