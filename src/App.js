
import './App.css';


import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";
  

import Home from "./components/Home";

import Problem2 from "./components/Problem2.jsx";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/problem2" element={<Problem2 />} />
        <Route path="*" element={<Home />} />

        
      </Routes>
    </BrowserRouter>



  );
}

export default App;
