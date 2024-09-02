import { Route, Routes } from "react-router-dom";
import Login from "./assets/Component/Login/Login";
import Home from "./assets/Component/Home/Home";

function App() {
     return (
          <Routes>
               <Route path="./assets/Component/Login/Login.tsx" element={<Login />} />
               <Route path="./assets/Component/Home/Home.tsx" element={<Home />} />
          </Routes>
     );
}

export default App;




// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import State from "./State";
// import PagesTwo from "./PagesTwo";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<State />} />
//       <Route path="/PagesTwo" element={<PagesTwo />} />
//     </Routes>
//   );
// }
