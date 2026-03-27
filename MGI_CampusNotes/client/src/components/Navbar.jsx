import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // If backend logout exists
      await API.post("/auth/logout");
    } catch (err) {
      console.log("Logout API not found, clearing manually");
    }

    // Clear cookie manually (fallback)
    document.cookie = "token=; Max-Age=0";

    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-xl font-bold cursor-pointer"
        >
          CampusNotes
        </h1>

        {/* Links */}
        <div className="flex gap-4 mt-3 md:mt-0 items-center">
          <Link
            to="/"
            className="hover:bg-blue-700 px-3 py-1 rounded-lg transition"
          >
            Home
          </Link>

          <Link
            to="/upload"
            className="hover:bg-blue-700 px-3 py-1 rounded-lg transition"
          >
            Upload
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;