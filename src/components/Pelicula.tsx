import React from 'react';
import { PeliculaProps } from '../interfaces/pelicula';

const Pelicula: React.FC<PeliculaProps> = ({
  title,
  year,
  image,
  esFavorita,
  onToggleFavorita,
}) => {
  return (
    <div
      className={`p-4 border rounded-lg shadow-md transition-all ${
        esFavorita ? 'bg-yellow-200' : 'bg-white'
      }`}
    >
      <img src={image} alt={title}   className="w-full h-64 object-cover object-center rounded" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">Año: {year}</p>
      <button
        onClick={onToggleFavorita}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        {esFavorita ? 'Quitar de favoritos' : 'Marcar como favorita'}
      </button>
    </div>
  );
};

export default Pelicula;
