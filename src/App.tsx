import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";
import Notes from "./Component/File Notes/Notes";
import Read from "./Component/CRUD/read";

function App() {
     return (
          <Router>
               <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/read" element={<Read />} />
               </Routes>
          </Router>
     );
}

export default App;
