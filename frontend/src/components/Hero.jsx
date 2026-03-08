import { Link } from "react-router-dom";

function Hero() {

  return (

    <div className="text-center mt-24 px-4">

      <p className="text-gray-400 mb-3">
        Free Online Text to Image AI
      </p>

      <h1 className="text-5xl font-bold mb-4">
        AI Album Cover Generator
      </h1>

      <p className="text-gray-400 mb-10">
        Generate stunning album covers in seconds - 100% free, no sign up required
      </p>

      <div className="flex justify-center">

        <div className="flex bg-[#0f1629] p-3 rounded-xl w-[500px]">

          <input
            type="text"
            placeholder="Enter your prompt..."
            className="bg-transparent flex-1 outline-none text-white"
          />

          <button className="bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700">
            Generate
          </button>

        </div>

      </div>

    </div>
  )
}

export default Hero