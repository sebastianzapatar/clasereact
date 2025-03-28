import axios from 'axios';
import { PeliculaData } from '../interfaces/pelicula';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
export const buscarPeliculas = async (titulo: string): Promise<PeliculaData[]> => {
  const url = `${API_URL}/?apikey=${API_KEY}&s=${titulo}`;
  const response = await axios.get(url);

  const data = response.data;

  if (data.Response === 'True') {
    return data.Search.map((p: any) => ({
      id: p.imdbID,
      title: p.Title,
      year: p.Year,
      image: p.Poster,
      esFavorita: false,
    }));
  } else {
    throw new Error(data.Error || 'No se encontraron películas');
  }
};
