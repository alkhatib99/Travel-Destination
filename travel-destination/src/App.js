import './App.css';
import Header from "./compnents/header/Header.js";
import Footer from "./compnents/footer/Footer.js";
import Tours from "./compnents/tours/Tours.js";
import tourData from "./data/db.json"
function App() {
  console.log(tourData);
  return (
    <div className="Home">
      <header>
        <Header />

      </header>

      
        <Tours data={tourData} />
      <footer>
        <Footer  />
      </footer>
    </div>
  );
}

export default App;
