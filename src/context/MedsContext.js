import { useState } from 'react';
import { createContext } from 'react';

const MedsControlContext = createContext();

const MedsControlProvider = ({ children }) => {
  const [medicamento, setMedicamento] = useState({
    medicamento: '',
    laboratorio: '',
    dosagem: '',
    tipo: '',
    precoUnit: 0,
    descricao: '',
  });

  const handleMedicamento = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMedicamento((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const postApi = () => {
    fetch('http://localhost:3001/medicamentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medicamento),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postApi();
    alert(
      `${medicamento.medicamento} ${medicamento.dosagem} Cadastrada com Sucesso`
    );
  };

  const clearForm = () => {
    setMedicamento({
      medicamento: '',
      laboratorio: '',
      dosagem: '',
      tipo: '',
      precoUnit: 0,
      descricao: '',
    });
  };
  return (
    <MedsControlContext.Provider
      value={{ medicamento, handleMedicamento, handleSubmit, clearForm }}
    >
      {children}
    </MedsControlContext.Provider>
  );
};

export default MedsControlProvider;
export { MedsControlContext };
