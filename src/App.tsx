import { useState } from 'react';
import Pelicula from './components/Pelicula';
import FormularioPelicula from './components/FormularioPelicula';
import { PeliculaData, NuevaPelicula } from './interfaces/pelicula';
import { peliculasMock } from './data/peliculas';

function App() {
  const [peliculas, setPeliculas] = useState<PeliculaData[]>(peliculasMock);

  const toggleFavorita = (id: number) => {
    const nuevas = peliculas.map(p =>
      p.id === id ? { ...p, esFavorita: !p.esFavorita } : p
    );
    setPeliculas(nuevas);
  };

  const agregarPelicula = (nueva: NuevaPelicula) => {
    const nuevaPeli: PeliculaData = {
      id: peliculas.length + 1,
      esFavorita: false,
      ...nueva,
    };
    setPeliculas(prev => [nuevaPeli, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">🎬 Lista de Películas</h1>

      <FormularioPelicula onAgregar={agregarPelicula} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {peliculas.map(p => (
          <Pelicula
            key={p.id}
            title={p.title}
            year={p.year}
            image={p.image}
            esFavorita={p.esFavorita}
            onToggleFavorita={() => toggleFavorita(p.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
