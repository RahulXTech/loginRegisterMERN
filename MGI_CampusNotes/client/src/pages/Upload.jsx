import { useState } from "react";
import API from "../services/api";

function Upload() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    subject: "",
    college: "",
    price: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      return alert("Please select a PDF file");
    }

    const data = new FormData();

    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    data.append("file", file);

    try {
      const res = await API.post("/notes/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message);

      // Reset form
      setForm({
        title: "",
        description: "",
        subject: "",
        college: "",
        price: "",
      });
      setFile(null);

    } catch (err) {
      alert(err.response?.data?.message || "Upload failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Upload Notes</h2>

        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input" />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="input" />
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="input" />
        <input name="college" value={form.college} onChange={handleChange} placeholder="College" className="input" />
        <input name="price" value={form.price} onChange={handleChange} type="number" placeholder="Price" className="input" />

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-3"
        />

        <button className="btn">Upload PDF</button>
      </form>
    </div>
  );
}

export default Upload;