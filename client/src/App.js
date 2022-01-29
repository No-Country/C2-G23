<<<<<<< HEAD
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
//Importación de componentes
import Navbar from "./components/Header";
import Footer from "./components/Footer";

=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Header from './components/Header';
import Search from './components/Search';
import Servicios from "./components/Services";
import SignIn from "./components/SignIn"
import LogIn from "./components/LogIn";
import Footer from './components/Footer';
>>>>>>> origin/frontGeronimo

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Navbar/>
      <Footer/>
=======
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/services" element={<Servicios />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/services" element={<Servicios />} />
        </Routes>
        <Footer />
>>>>>>> origin/frontGeronimo
    </Router>
  );
}

export default App;
