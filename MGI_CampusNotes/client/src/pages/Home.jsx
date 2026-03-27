import { useEffect, useState } from "react";
import { getAllNotes, downloadNote } from "../services/notes";

function Home() {
  const [notes, setNotes] = useState([]);
const [search, setSearch] = useState("");
const [subjectFilter, setSubjectFilter] = useState("");
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await getAllNotes();
      setNotes(res.data.notes);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDownload = async (id) => {
    try {
      const res = await downloadNote(id);
      window.open(res.data.fileUrl, "_blank");
    } catch (err) {
      alert("Download failed");
    }
  };

  const filteredNotes = notes.filter((note) => {
  return (
    note.title.toLowerCase().includes(search.toLowerCase()) &&
    (subjectFilter === "" || note.subject === subjectFilter)
  );
});

  return (
    <div className="p-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-3 mb-6">
  
  {/* Search */}
  <input
    type="text"
    placeholder="Search notes..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="input"
  />

  {/* Filter */}
  <select
    value={subjectFilter}
    onChange={(e) => setSubjectFilter(e.target.value)}
    className="input"
  >
    <option value="">All Subjects</option>
    <option value="Math">Math</option>
    <option value="Physics">Physics</option>
    <option value="Chemistry">Chemistry</option>
  </select>
</div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
         Available Notes
      </h1>


{filteredNotes.length === 0 && (
  <p className="text-center text-gray-500 mt-6">
    No notes found 
  </p>
)}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {filteredNotes.map((note) => (
          <div
  key={note._id}
  className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition duration-300"
>
  <h2 className="font-bold text-lg">{note.title}</h2>

  <p className="text-sm text-gray-500">{note.subject}</p>

  <p className="text-sm mt-2 text-gray-700">
    👤 {note.uploadedBy?.name}
  </p>

  <button
    onClick={() => handleDownload(note._id)}
    className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
  >
    ⬇ Download
  </button>
</div>
        ))}
      </div>
    </div>
  );
}

export default Home;