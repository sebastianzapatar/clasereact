import { useState, useEffect } from 'react';
import FormularioBusqueda from '../components/FormularioPelicula';
import Pelicula from '../components/Pelicula';
import { PeliculaData } from '../interfaces/pelicula';
import { buscarPeliculas } from '../services/peliculasService';

const Buscar = () => {
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
    cargarPeliculas('batman');
  }, []);

  const toggleFavorita = (id: string) => {
    const nuevas = peliculas.map(p =>
      p.id === id ? { ...p, esFavorita: !p.esFavorita } : p
    );
    setPeliculas(nuevas);
  };

  return (
    <div>
      <FormularioBusqueda onBuscar={cargarPeliculas} />
      {loading && <p>Cargando películas...</p>}
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
};

export default Buscar;
