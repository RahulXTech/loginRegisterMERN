import React from "react";
import Navbar from "../components/common/Navbar";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;