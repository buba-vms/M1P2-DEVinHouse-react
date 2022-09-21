import React, { useState } from 'react';
import RegisterMed from '../pages/RegisterMed';
import RegisterPharmacy from '../pages/RegisterPharmacy';

const RegisterSelect = () => {
  const [register, setRegister] = useState('');

  const handleRegister = (pagina) => {
    setRegister(pagina);
  };

  return (
    <div className="container">
      <h5 className="mt-2">Cadastrar: </h5>
      <div className="btn-group btn-group-toggle mt-2 m" data-toggle="buttons">
        <label
          className="btn btn-primary"
          onClick={() => {
            handleRegister('farmacia');
          }}
        >
          <input
            type="radio"
            name="options"
            id="option2"
            autoComplete="off"
            style={{ textDecoration: 'none' }}
          />
          Farmácia
        </label>
        <label
          className="btn btn-primary"
          onClick={() => {
            handleRegister('medicamento');
          }}
        >
          <input type="radio" name="options" id="option3" autoComplete="off" />
          Medicamento
        </label>
      </div>
      <main className="mt-3 mx-2">
        {!register && <h6>Selecione a opção que deseja cadastrar</h6>}
        {register === 'farmacia' && <RegisterPharmacy />}
        {register === 'medicamento' && <RegisterMed />}
      </main>
    </div>
  );
};

export default RegisterSelect;
