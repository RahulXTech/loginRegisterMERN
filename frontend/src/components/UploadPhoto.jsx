import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function UploadPhoto() {

  const navigate = useNavigate();   // ✅ correct place

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post("http://localhost:3000/create-post", formData)
      .then((res)=>{
        console.log(res)
        navigate("http://localhost:5174/")
      })
      .catch((err)=>{
        console.log("Post error message :", err)
        alert("Error creating post")
      })
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-gray-800 p-8 rounded-xl">

      <h2 className="text-2xl font-semibold mb-6">
        Upload New Photo
      </h2>

      <form className="grid gap-4" onSubmit={handleSubmit}>

        <input
          type="file"
          name="image"
          className="bg-gray-900 p-3 rounded-lg"
        />

        <input
          type="text"
          name="title"
          placeholder="Photo Title"
          className="bg-gray-900 p-3 rounded-lg outline-none"
        />

        <button
          className="bg-purple-600 py-3 rounded-lg hover:bg-purple-700"
        >
          Upload Photo
        </button>

      </form>

    </div>
  )
}

export default UploadPhoto;