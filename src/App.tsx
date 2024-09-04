// import { Route, Routes } from "react-router-dom";
// import Login from "./assets/Component/Login/Login";
// import Home from "./assets/Component/Home/Home";

import Notes from "./assets/Component/File Notes/Notes";
import Home from "./assets/Component/Home/Home";
import Login from "./assets/Component/Login/Login";


function App() {
     return (
     //      <Routes>
     //           <Route path="./assets/Component/Login/Login.tsx" element={<Login />} />
     //           <Route path="./assets/Component/Home/Home.tsx" element={<Home />} />
     //      </Routes>
     // );
     <div>
          <Login/>
          <Home/>
          <Notes/>
     </div>
)}

export default App;
