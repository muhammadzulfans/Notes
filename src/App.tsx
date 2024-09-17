import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";
import Notes from "./Component/File Notes/Notes";

function App() {
     return (
          <Router>
               <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/notes" element={<Notes />} />
               </Routes>
          </Router>
     );
}

export default App;
