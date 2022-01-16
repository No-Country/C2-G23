import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Header from './components/Header';
import Search from './components/Search';
import Servicios from "./components/Servicios";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
