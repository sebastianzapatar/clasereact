import { NuevaPelicula } from '../interfaces/pelicula';
import { useFormulario } from '../hooks/useFormulario';

interface Props {
  onAgregar: (pelicula: NuevaPelicula) => void;
}

const FormularioPelicula: React.FC<Props> = ({ onAgregar }) => {
  const { formData, handleChange, setFormData } = useFormulario<NuevaPelicula>({
    title: '',
    year: new Date().getFullYear(),
    image: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.image) return;
    onAgregar(formData);
    setFormData({ title: '', year: new Date().getFullYear(), image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded shadow-md max-w-md">
      <h2 className="text-xl font-bold mb-4">Agregar Nueva Película</h2>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={formData.title}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="number"
        name="year"
        placeholder="Año"
        value={formData.year}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="image"
        placeholder="URL de imagen"
        value={formData.image}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Agregar Película
      </button>
    </form>
  );
};

export default FormularioPelicula;
