import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Buscar from './pages/Buscar';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
