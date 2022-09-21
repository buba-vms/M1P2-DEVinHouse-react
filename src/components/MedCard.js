import React, { useState } from 'react';
import MedModal from './MedModal';
const MedCard = ({ remedio }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow((prev) => !prev);
  const handleShow = () => setShow((prev) => !prev);

  return (
    <>
      <div
        className="card btn bg-light col-sm-12 col-md-6 col-lg-3 mt-2 "
        style={{ color: 'black', maxHeight: '25vh' }}
        onClick={handleShow}
      >
        {/* <img className="card-img-top" src=".../100px180/" alt="Card image cap" /> */}
        <img
          src="https://precopopular.vteximg.com.br/arquivos/ids/186893-1800-500/rotulo_pp_retencao_receita.jpg?v=637836527326000000"
          alt="caixa de remédio"
          style={{ borderRadius: '12px' }}
        />
        <div className="card-body">
          <p className="card-title text-center" style={{ fontSize: '18px' }}>
            {remedio.medicamento} {remedio.dosagem}
          </p>
          <p className="card-text text-center" style={{ fontSize: '12px' }}>
            {remedio.laboratorio}
          </p>
        </div>
        <MedModal props={{ show, handleClose, remedio }} />
      </div>
    </>
  );
};

export default MedCard;
