import React from "react";
import Navbar from "../components/common/Navbar";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;