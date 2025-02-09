"use client";
import ResgisterLayout from "@/components/Layouts/RegisterLayout";
import FormRegister from "@/components/Fragments/RegisterForm";

const RegisterPage = () => {
  return (
    <ResgisterLayout title="Register" type="register">
      <FormRegister />
    </ResgisterLayout>
  );
};

export default RegisterPage;
