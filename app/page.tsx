"use client";
import AuthLayout from "@/components/Layouts/LoginLayout";
import FormLogin from "@/components/Fragments/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
