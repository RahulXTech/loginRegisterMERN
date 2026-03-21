import axios from "axios";
import { useEffect, useState } from "react";

function Gallery() {

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(null);

  // fetch posts
  useEffect(() => {
    axios.get("http://localhost:3000/show-post")
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  // toggle three dot menu
  const toggleMenu = (id) => {
    if (menuOpen === id) {
      setMenuOpen(null);
    } else {
      setMenuOpen(id);
    }
  };

  // delete post
  const deletePost = async (id) => {
    try {

      await axios.delete(`http://localhost:3000/delete-post/${id}`);

      alert("Post deleted successfully");

      // update UI
      setPost(post.filter((p) => p._id !== id));

      setMenuOpen(null);

    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading photos...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-14 px-6">

      <h2 className="text-2xl font-semibold mb-8">
        Latest Photos
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

        {post.map((photo) => (
          <div
            key={photo._id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition relative"
          >

            {/* three dot icon */}
            <button
              onClick={() => toggleMenu(photo._id)}
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer hover:text-gray-300 z-10"
            >
              ⋮
            </button>

            {/* dropdown menu */}
            {menuOpen === photo._id && (
              <div className="absolute top-10 right-3 bg-white text-black rounded-md shadow-md w-24 z-20">

                <button
                  className="block w-full text-left px-3 py-2 hover:bg-gray-200"
                >
                  Edit
                </button>

                <button
                  onClick={() => deletePost(photo._id)}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-200"
                >
                  Delete
                </button>

              </div>
            )}

            {/* image */}
            <img
              src={photo?.image}
              alt={photo?.title}
              className="w-full h-[250px] object-cover"
            />

            {/* title */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {photo?.title}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Gallery;