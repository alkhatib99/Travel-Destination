import './App.css';
import Home from "./compnents/home/Home.js"
import {Routes, Route} from 'react-router-dom';
import TourDetails from './compnents/tourDetails/TourDeatils';
import data from "./data/db.json"
function App() {

  return (
    <div className="Home">
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour/:id" element={<TourDetails data={data}  />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
