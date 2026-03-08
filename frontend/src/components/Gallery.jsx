import axios from "axios";
import { useEffect, useState } from "react";

function Gallery() {

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get("http://localhost:3000/show-post")
    .then((res)=>{
      setPost(res.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log("Error fetching posts:", err)
      setLoading(false)
    })
  },[])

  if(loading){
    return <p className="text-center mt-10">Loading photos...</p>
  }

  return (
    <div className="max-w-7xl mx-auto mt-14 px-6">

      <h2 className="text-2xl font-semibold mb-8">
        Latest Photos
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

        {post.map((photo)=>(
          <div
            key={photo._id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >

            <img
              src={photo?.image}
              alt={photo?.title}
              className="w-full h-[250px] object-cover"
            />

            <div className="p-4">

              <h3 className="text-lg font-semibold">
                {photo?.title}
              </h3>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Gallery;