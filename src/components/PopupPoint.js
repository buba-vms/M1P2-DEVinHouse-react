import React from 'react';
import { PatternFormat } from 'react-number-format';
import { Popup } from 'react-leaflet';
const PopupPoint = ({
  razaoSocial,
  nomeFantasia,
  CNPJ,
  email,
  telefone,
  celular,
}) => {
  return (
    <Popup>
      <h6>{razaoSocial}</h6>
      <p>
        <b>CNPJ:</b>

        <PatternFormat
          value={CNPJ}
          format="##.###.###/####-##"
          displayType="text"
        />
      </p>
      <p>
        <b>Nome Fantasia:</b> {nomeFantasia}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>
        <b>Telefone:</b>
        <PatternFormat
          value={telefone}
          format="(##) ####-####"
          displayType="text"
        />
      </p>
      <p>
        <b>WhatsApp:</b>
        <PatternFormat
          value={celular}
          format="(##) # ####-####"
          displayType="text"
        />
      </p>
    </Popup>
  );
};

export default PopupPoint;
