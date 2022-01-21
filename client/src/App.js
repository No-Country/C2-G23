import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
//Importación de componentes
import Navbar from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar/>
      <Footer/>
    </Router>
  );
}

export default App;
