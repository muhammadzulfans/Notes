import React from "react";
import Read from "../CRUD/read";

const Home: React.FC = () => {
     const handlelogout = () => {
          localStorage.removeItem("token");
          window.location.href = "/";
     };
     const handleNotes = () => {
          window.location.href = "/notes";
     };

     return (
          <div className="bg-orange-200 h-screen">
               <div className="flex justify-between grid-rows-2 p-20">
                    <div className="text-6xl font-mono">
                         <p>Notes</p>
                    </div>
                    <button onClick={handlelogout}>
                         <img src="/src/assets/logout.png" className="w-10" />
                    </button>
               </div>

               <div className="read-notes">
                    <Read />
               </div>
               <div className="flex justify-end mt-96 text-5xl font-serif p-28 ">
                    <button onClick={handleNotes} className="py-3 px-6 rounded-full border-2 border-orange-800 ">
                         +
                    </button>
               </div>
          </div>
     );
};

export default Home;
