import React, { useState, useEffect } from 'react';
import MedCard from './MedCard';

const MedCardsList = () => {
  const [medicamentos, setMedicamentos] = useState([{}]);
  const [search, setSearch] = useState('');
  const [aviso, setAviso] = useState(false);
  useEffect(() => {
    getMedicamentos();
  }, []);

  useEffect(() => {
    if (medicamentos.length === 0) {
      setAviso(true);
      getMedicamentos();
      const timeout = setTimeout(() => {
        setAviso(false);
        return clearTimeout(timeout);
      }, 2500);
    }
  }, [medicamentos]);

  const getMedicamentos = () => {
    fetch('http://localhost:3001/medicamentos')
      .then((res) => res.json())
      .then((data) => setMedicamentos(data));
  };

  const filterMedicamentos = () => {
    if (search.length > 0) {
      const newSearch = search.toLocaleLowerCase();
      const newArray = medicamentos.filter((remedio) => {
        return remedio.medicamento.toLowerCase().includes(newSearch);
      });
      const dummyObj = {
        medicamento: '',
        laboratorio: '',
        dosagem: '',
        tipo: '',
        precoUnit: 0,
        descricao: '',
        id: 'abc',
      };
      console.log(newArray);
      if (newArray.length > 0) {
        setMedicamentos([dummyObj, ...newArray]);
      } else {
        setMedicamentos([]);
      }
    }
  };

  return (
    <main className="container mt-4 d-flex-column justify-content-center align-items-center ">
      <h6 style={{ fontSize: '20px' }}>
        Lista de Medicamentos&nbsp; &nbsp;
        <br />
        {aviso ? (
          <span
            style={{
              color: '#eee',
              fontSize: '16px',
              textIndent: '2px',
              '--bs-bg-opacity': '.8',
            }}
            className=" bg-danger p-1 col-sm-12"
          >
            Nenhum Medicamento encontrado
          </span>
        ) : null}
      </h6>

      <div className="row container mb-sm-4">
        <div className="col-lg-8 mb-2 col-sm-12 ">
          <input
            type="search"
            name=""
            id=""
            value={search || ''}
            className="form-control"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="col-lg-4 col-sm-12 mx-auto">
          <button
            className="btn btn-danger col-4"
            style={{ fontSize: '14px', letterSpacing: '2px' }}
            onClick={() => {
              getMedicamentos();
              setAviso(false);
              setSearch('');
            }}
          >
            Limpar
          </button>
          <button
            className="btn btn-primary col-7 mx-2"
            style={{ fontSize: '14px', letterSpacing: '2px' }}
            onClick={filterMedicamentos}
          >
            Pesquisar
          </button>
        </div>
      </div>
      <div
        className="container mb-5 mt-3 overflow-auto row p-3 justify-content-left "
        style={{
          background: '#eee',
          height: '70vh',
          borderRadius: '12px',
        }}
      >
        {medicamentos.map((medItem, index) => {
          if (index !== 0) {
            return <MedCard remedio={medItem} key={medItem.id} />;
          }
          return null;
        })}
      </div>
    </main>
  );
};

export default MedCardsList;
