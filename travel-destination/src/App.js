import './App.css';
import Header from "./compnents/header/Header.js";
import Footer from "./compnents/footer/Footer.js";
import Home from "./compnents/home/Home.js"
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="Home">
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
