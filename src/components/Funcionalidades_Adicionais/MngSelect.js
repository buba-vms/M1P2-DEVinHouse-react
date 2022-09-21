import React, { useState } from 'react';
import NewRequestForm from './NewRequestForm';
import PharmacyManagment from './PharmacyManagment';
import MedManagment from './MedManagment';

const MngSelect = () => {
  const [register, setRegister] = useState('');

  const handleRegister = (pagina) => {
    setRegister(pagina);
  };

  return (
    <div className="container">
      <h5 className="mt-2">Gerenciar: </h5>
      <div className="btn-group btn-group-toggle mt-2 m" data-toggle="buttons">
        <label
          className="btn btn-primary"
          onClick={() => {
            handleRegister('novo-pedido');
          }}
        >
          <input
            type="radio"
            name="options"
            id="option2"
            autoComplete="off"
            style={{ textDecoration: 'none' }}
          />
          Pedidos
        </label>
        <label
          className="btn btn-primary"
          onClick={() => {
            handleRegister('farmacias');
          }}
        >
          <input type="radio" name="options" id="option3" autoComplete="off" />
          Farmácias
        </label>
        <label
          className="btn btn-primary"
          onClick={() => {
            handleRegister('medicamentos');
          }}
        >
          <input type="radio" name="options" id="option3" autoComplete="off" />
          Medicamentos
        </label>
      </div>
      <main className="mt-3 mx-2">
        {!register && <h6>Selecione a opção que deseja cadastrar</h6>}
        {register === 'novo-pedido' && <NewRequestForm />}
        {register === 'farmacias' && <PharmacyManagment />}
        {register === 'medicamentos' && <MedManagment />}
      </main>
    </div>
  );
};

export default MngSelect;
