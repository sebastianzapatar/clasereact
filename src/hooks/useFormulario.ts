import { useState } from 'react';

type Formulario<T> = {
  formData: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
};

export function useFormulario<T>(estadoInicial: T): Formulario<T> {
  const [formData, setFormData] = useState<T>(estadoInicial);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  return { formData, handleChange, setFormData };
}
