import React, { useEffect, useState } from "react";
import {auth, provider} from "../GoogleSignIn/Config";
import { signInWithPopup } from "firebase/auth";
import Home from "../Home/Home";


const Login: React.FC = () => {
  const [value, setValue] = useState<string | null>(null);
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email || "");
      localStorage.setItem("email", data.user.email || "");
    });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setValue(storedEmail || "");
  }, []);


     return (
          <div className="bg-orange-100 h-screen">
               <div className="w-3/5 container mx-auto col-start-auto py-36">
                    <div className="flex justify-center text-6xl text-orange-800 py-32">
                         <p className="flex">Login with google</p>
                    </div>
                    <div className="py-2 px-4 flex justify-center text-xl text-orange-800">
                      {
                        value?<Home/>:
                        <button onClick={handleClick} className="border border-orange-700 rounded-full py-2 px-24">Sign In</button>
                      }
                    </div>  
               </div>
          </div>
     );
};

export default Login;
