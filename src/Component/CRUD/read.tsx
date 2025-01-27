import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../GoogleSignIn/Config";

interface Note {
     id: string;
     judul: string;
     deskripsi: string;
}

const Read: React.FC = () => {
     const [notes, setNotes] = useState<Note[]>([]);

     useEffect(() => {
          const fetchNotes = async () => {
               const notesCollection = collection(db, "notes");
               const notesSnapshot = await getDocs(notesCollection);
               const notesList = notesSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
               })) as Note[];
               setNotes(notesList);
          };

          fetchNotes();
     }, []);

     return (
          <div className="px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
               {notes.map((note) => (
                    <div key={note.id} className="bg-orange-300 shadow-md rounded-lg p-8">
                         <h2 className="text-2xl font-bold mb-4">{note.judul}</h2>
                         <p className="text-gray-500">{note.deskripsi}</p>
                    </div>
               ))}
          </div>
     );
};

export default Read;

