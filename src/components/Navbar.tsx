import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold">🎬 MovieApp</Link>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className={`md:flex gap-4 ${isOpen ? 'block' : 'hidden'} md:block mt-2 md:mt-0`}>
          <li><Link to="/" className="hover:underline">Inicio</Link></li>
          <li><Link to="/buscar" className="hover:underline">Buscar</Link></li>
          <li><Link to="/contacto" className="hover:underline">Contáctenos</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
