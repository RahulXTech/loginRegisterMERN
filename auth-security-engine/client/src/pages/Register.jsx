import { useState } from "react";
import API from "../services/api";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/auth/register", form);
      alert("Registered Successfully");
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>

        <Input name="name" placeholder="Name" onChange={handleChange} />
        <Input name="email" placeholder="Email" onChange={handleChange} />
        <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <Input name="college" placeholder="College" onChange={handleChange} />

        <Button text="Register" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Register;