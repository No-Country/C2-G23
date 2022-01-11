import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


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
