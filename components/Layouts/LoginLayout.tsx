"use client";

import Navigation from "@/constants/navigation";
interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  type: "login" | "register";
}

const AuthLayout = ({ children, title, type }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-css-custom">
      <div className="w-full max-w-sm p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold pl-5 mb-6">{title}</h2>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

export default AuthLayout;
