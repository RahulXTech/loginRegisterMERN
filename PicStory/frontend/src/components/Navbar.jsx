import { Link} from "react-router-dom";

function Navbar() {
  return (

    <nav className="flex justify-between items-center px-10 py-4 border-b border-gray-800">

      <h1 className="text-xl font-bold text-purple-400">
       <Link to="/">Photo Album</Link>
      </h1>

      <div className="flex gap-6 text-gray-300">
        <p className="cursor-pointer hover:text-white"> <Link to="/">Home</Link> </p>
        <p className="cursor-pointer hover:text-white"> <Link to="/">Albums</Link> </p>
        <p className="cursor-pointer hover:text-white"> <Link to="upload">Upload</Link> </p>
      </div>

    </nav>
  )
}

export default Navbar;