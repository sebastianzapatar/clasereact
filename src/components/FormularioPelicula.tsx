import { useFormulario } from '../hooks/useFormulario';

interface Props {
  onBuscar: (titulo: string) => void;
}

interface FormData {
  titulo: string;
}

const FormularioBusqueda: React.FC<Props> = ({ onBuscar }) => {
  const { formData, handleChange, setFormData } = useFormulario<FormData>({
    titulo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.titulo.trim()) return;
    onBuscar(formData.titulo.trim());
    setFormData({ titulo: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded shadow-md max-w-md">
      <h2 className="text-xl font-bold mb-4">🔍 Buscar Película</h2>
      <input
        type="text"
        name="titulo"
        placeholder="Ej: Matrix, Inception, Interstellar..."
        value={formData.titulo}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Buscar
      </button>
    </form>
  );
};

export default FormularioBusqueda;
