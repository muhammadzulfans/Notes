import React from "react";

const Login: React.FC = () => {
     return (
          <div className="bg-orange-100 h-screen">
               <div className="w-3/5 container mx-auto col-start-auto py-36">
                    <div className="flex justify-center text-6xl text-orange-800 py-32">
                         <p className="flex">Login with google</p>
                    </div>
                    <div className="py-2 px-4 flex justify-center text-xl text-orange-800">
                         <button className="border border-orange-700 rounded-full py-2 px-24">Sign In</button>
                    </div>
               </div>
          </div>
     );
};

export default Login;
