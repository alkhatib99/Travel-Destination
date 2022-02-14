import './App.css';
import Header from "./compnents/header/Header.js";
import Footer from "./compnents/footer/Footer.js";
import Home from "./compnents/home/Home.js"
function App() {
  return (
    <div className="Home">
      <header>
        <Header />

      </header>
<Home/>
      
      <footer>
        <Footer  />
      </footer>
    </div>
  );
}

export default App;
