import React from "react";

const Notes: React.FC = () => {
     return (
          <div className="bg-orange-300 h-screen">
               <div className="text-4xl p-16 font-mono">
                    <div className="flex justify-between grid-rows-2 px-16">
                         <button>
                              <img src="/src/assets/left-arrow.png" className="w-10" />
                         </button>
                         <button>
                              <img src="/src/assets/check.png" className="w-10" />
                         </button>
                    </div>
                    <form>
                         <div className="px-20 pt-12">
                              <input type="text" className="text-3xl bg-transparent border-b-2 border-orange-700 w-full py-2 px-3 text-black placeholder-gray-500 focus:outline-none" placeholder="Judul" />
                         </div>
                         <div className="px-20 pt-14">
                              <textarea className="text-4xl w-full py-2 px-3 text-black focus:outline-none bg-transparent placeholder-gray-500 h-full" placeholder="Mulai mengetik..."></textarea>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default Notes;
