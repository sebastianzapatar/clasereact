import { useEffect, useState } from 'react';
import Pelicula from './components/Pelicula';
import FormularioBusqueda from './components/FormularioPelicula';
import { PeliculaData } from './interfaces/pelicula';
import { buscarPeliculas } from './services/peliculasService';

function App() {
  const [peliculas, setPeliculas] = useState<PeliculaData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarPeliculas = async (titulo: string) => {
    try {
      setLoading(true);
      const resultado = await buscarPeliculas(titulo);
      setPeliculas(resultado);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Error al cargar películas');
      setPeliculas([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPeliculas('batman'); // búsqueda inicial
  }, []);

  const toggleFavorita = (id: string) => {
    const nuevas = peliculas.map(p =>
      p.id === id ? { ...p, esFavorita: !p.esFavorita } : p
    );
    setPeliculas(nuevas);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">🎬 Buscador de Películas (OMDb)</h1>

      <FormularioBusqueda onBuscar={cargarPeliculas} />

      {loading && <p className="text-blue-500">Cargando películas...</p>}
      {error && <p className="text-red-500">{error}</p>}

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
