import Navbar from "./components/Navbar";
import UploadPhoto from "./components/UploadPhoto";
import Gallery from "./components/Gallery";
import { Route , Routes } from "react-router-dom";

function App() {

  const photos = [
    {
      id:1,
      title:"Mountain View",
      description:"Beautiful mountain landscape",
      image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
      id:2,
      title:"Forest",
      description:"Green forest nature",
      image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    }
  ]

  return (
    <div className="bg-gray-900 min-h-screen text-white">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Gallery photos={photos}/>} />
        <Route path="/upload" element={<UploadPhoto/>} />
      </Routes>

    </div>
  )
}

export default App;