import React from "react"

const Home: React.FC = () => {
  return (
    <div className="bg-orange-200 h-screen">
      <div className="text-4xl p-16 font-mono">
        <p>Notes</p>
      </div>


      <div className="flex justify-end mt-96 text-5xl font-serif p-28 ">
        <button className="py-3 px-6 rounded-full border-2 border-orange-800 ">+</button>
      </div>
    </div>
  )
};

export default Home;
