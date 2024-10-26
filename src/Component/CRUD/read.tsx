import { db } from "../GoogleSignIn/Config";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

interface Notes {
     id: string;
     title: string;
     content: string;
}

const ReadNotes: React.FC = () => {
     const handleNotes = () => {
          window.location.href = "/notes";
     };

     const [notes, setNotes] = useState<Notes[]>([]);

     // const fetchNotes = async () => {
     //      try {
     //           const querySnapshot = await getDocs(collection(db, "notes"));
     //           const notesData: Notes[] = querySnapshot.docs.map(
     //                (doc) =>
     //                     ({
     //                          id: doc.id,
     //                          ...doc.data(),
     //                     } as Notes)
     //           );
     //           setNotes(notesData);
     //      } catch (error) {
     //           console.error("Error fetching notes: ", error);
     //      }
     // };

     // useEffect(() => {
     //      fetchNotes();
     // }, []);

     return (
          <div>
               <ul>
                    {notes.map((notes) => (
                         <li key={notes.id}>
                              <h2>{notes.title}</h2>
                              <p>{notes.content}</p>
                         </li>
                    ))}
               </ul>
               {/* <button onClick={handleNotes} className=" max-w-sm m-20 p-6 rounded-xl hover:bg-orange-400 bg-orange-300">
                    <h5 className="text-start mb-2 text-4xl font-bold font-serif text-gray-700 hover:text-gray-900">judul</h5>
                    <p className="text-start font-mono text-gray-700 hover:text-gray-900">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
               </button> */}
          </div>
     );
};

export default ReadNotes;

// const [loading, setLoading] = useState(true);
// setLoading(false);
// if (loading) {
//      return <div>Loading...</div>;
// }
