import { useState } from "react";
import API from "../services/api";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      await API.post("/auth/login", data);
      alert("Login Success");
    } catch {
      alert("Login Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        
        <div className="w-full max-w-md p-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-xl space-y-5">
          
          <h1 className="text-2xl font-bold text-center">
            Welcome Back
          </h1>

          <Input
            placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <Button text="Login" onClick={handleLogin} />

          <p className="text-center text-sm">
            Don't have an account? Register
          </p>

        </div>
      </div>
    </>
  );
};

export default Login;