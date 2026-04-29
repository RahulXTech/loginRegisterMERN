import React, { useState } from "react";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);

      alert("Login Successful");

      // Redirect after login
      navigate("/subjects");

      console.log(data);
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Welcome Back 👋
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;