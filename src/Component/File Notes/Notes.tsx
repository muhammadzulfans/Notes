import React, { useState, FormEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../GoogleSignIn/Config";

const Notes: React.FC = () => {
     const [judul, setJudul] = useState<string>("");
     const [deskripsi, setDeskripsi] = useState<string>("");

     const handleSubmit = async (e: FormEvent) => {
          e.preventDefault();

          try {
               await addDoc(collection(db, "notes"), {
                    judul,
                    deskripsi,
               });

               setJudul("");
               setDeskripsi("");

               window.location.href = "/home";
          } catch (error) {
               console.error("Error adding document: ", error);
          }
     };

     const handleBack = () => {
          window.location.href = "/home";
     };

     return (
          <div className="bg-orange-300 h-screen">
               <div className="text-4xl p-16 font-mono">
                    <div className="flex justify-between grid-rows-2 px-16">

                         <button onClick={handleBack}>
                              <img src="/src/assets/left-arrow.png" className="w-16" alt="Back" />
                         </button>

                         <button type="submit" className="btn" onClick={handleSubmit}>
                              <img src="/src/assets/check.png" className="w-16" alt="Save" />
                         </button>
                         
                    </div>

                    <form onSubmit={handleSubmit}>
                         <div className="px-20 pt-12">
                              <input
                                   type="text"
                                   className="text-3xl bg-transparent border-b-2 border-orange-700 w-full py-2 px-3 text-black placeholder-gray-500 focus:outline-none"
                                   placeholder="Judul"
                                   onChange={(e) => setJudul(e.target.value)}
                                   value={judul}
                                   required
                              />
                         </div>

                         <div className="px-20 pt-14">
                              <textarea
                                   className="text-4xl w-full h-full py-2 px-3 text-black focus:outline-none bg-transparent placeholder-gray-500"
                                   placeholder="Mulai mengetik..."
                                   onChange={(e) => setDeskripsi(e.target.value)}
                                   value={deskripsi}
                                   required
                              />
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default Notes;
