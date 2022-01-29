import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Header from './components/Header';
import Search from './components/Search';
import Servicios from "./components/Services";
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn";
import Footer from './components/Footer';
import Recupero from "./components/Recupero";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/services" element={<Servicios />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/services" element={<Servicios />} />
          <Route path="/recupero" element={<Recupero />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
