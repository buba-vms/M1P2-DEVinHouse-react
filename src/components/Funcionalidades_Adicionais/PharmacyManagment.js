import React, { useState, useEffect } from 'react';
import Underline from '../Underline';
import { PatternFormat } from 'react-number-format';
const PharmacyManagment = () => {
  const [farmacias, setFarmacias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/farmacias')
      .then((res) => res.json())
      .then((data) => setFarmacias(data));
  }, []);

  const deleteRequest = (id, razaoSocial) => {
    if (window.confirm(`Deseja mesmo deletar ${razaoSocial}?`))
      fetch(`http://localhost:3001/farmacias/${id}`, {
        method: 'DELETE',
      }).then(() => getData());
  };

  const getData = () => {
    fetch('http://localhost:3001/farmacias')
      .then((res) => res.json())
      .then((data) => setFarmacias(data));
  };
  return (
    <>
      <h6>Lista de Farmácias</h6>
      <main className="mt-4 d-flex-column justify-content-center align-items-center ">
        <div
          className="container mb-5 overflow-auto row  justify-content-left mx-auto align-top"
          style={{
            background: '#eee',
            height: '70vh',
            borderRadius: '12px',
          }}
        >
          {farmacias.map((farmacia, index) => {
            const {
              informacoes: {
                razaoSocial,
                CNPJ,
                nomeFantasia,
                email,
                telefone,
                celular,
              },
              endereco: {
                cep,
                logradouro,
                complemento,
                bairro,
                localidade,
                uf,
                numero,
              },
            } = farmacia;
            if (index === 0) {
              return null;
            }
            return (
              <div
                className="card row mx-2 my-3  p-4 d-flex justify-content-around"
                style={{ background: 'white' }}
                key={farmacia.id}
              >
                <div className=" mt-2">
                  <h4>Razão Social: {razaoSocial}</h4>
                  <h6>
                    CNPJ:
                    {
                      <PatternFormat
                        value={CNPJ}
                        format=" ##.###.###/####-##"
                        displayType="text"
                      />
                    }
                  </h6>
                  <h6>Nome Fantasia: {nomeFantasia}</h6>
                  <h6>Email: {email}</h6>
                  <h6>
                    {telefone && `Telefone:`}
                    {telefone && (
                      <PatternFormat
                        value={telefone}
                        format="(##) ####-#### "
                        displayType="text"
                      />
                    )}
                    | Celular:
                    {
                      <PatternFormat
                        value={celular}
                        format="(##) ####-####"
                        displayType="text"
                      />
                    }
                  </h6>
                </div>
                <Underline />
                <div className=" mt-2">
                  <h6>CEP: {cep}</h6>
                  <h6>
                    Endereço: {logradouro}, {bairro},{' '}
                    {complemento.length > 0 && `${complemento},`}
                    {numero}
                  </h6>
                  <h6>
                    {localidade}, {uf}
                  </h6>
                </div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRequest(farmacia.id, razaoSocial)}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default PharmacyManagment;
