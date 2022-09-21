import React, { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
const MedManagment = () => {
  const [medicamentos, setFarmacias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/medicamentos')
      .then((res) => res.json())
      .then((data) => setFarmacias(data));
  }, []);

  const deleteRequest = (id, medicamento, dosagem) => {
    if (
      window.confirm(
        `Deseja mesmo deleter o medicamento ${medicamento} ${dosagem}`
      )
    ) {
      fetch(`http://localhost:3001/medicamentos/${id}`, {
        method: 'DELETE',
      }).then(() => getData());
    }
  };

  const getData = () => {
    fetch('http://localhost:3001/medicamentos')
      .then((res) => res.json())
      .then((data) => setFarmacias(data));
  };

  return (
    <>
      <h6>Lista de Medicamentos</h6>
      <main className="mt-4 d-flex-column justify-content-center align-items-center ">
        <div
          className="container mb-5 overflow-auto row  justify-content-left mx-auto align-top"
          style={{
            background: '#eee',
            height: '70vh',
            borderRadius: '12px',
          }}
        >
          <table className="table table-hover">
            <thead>
              <tr className="">
                <th scope="col">Medicamento</th>
                <th scope="col">Dosagem</th>
                <th scope="col">Laboratório</th>
                <th scope="col">Preço Unitário</th>
                <th scope="col">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {medicamentos.map((medItem, index) => {
                const { medicamento, laboratorio, dosagem, tipo, precoUnit } =
                  medItem;
                if (index === 0) {
                  return null;
                }
                return (
                  <tr style={{ maxHeight: '25px' }} key={medItem.id}>
                    <td>{medicamento}</td>
                    <td>{dosagem}</td>
                    <td>{laboratorio}</td>
                    <td>
                      <NumericFormat
                        value={precoUnit}
                        displayType="text"
                        valueIsNumericString
                        prefix="R$ "
                        decimalSeparator=","
                      />
                    </td>
                    <td>{tipo}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteRequest(
                            medItem.id,
                            medItem.medicamento,
                            medItem.dosagem
                          );
                        }}
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        ;
      </main>
    </>
  );
};

export default MedManagment;
