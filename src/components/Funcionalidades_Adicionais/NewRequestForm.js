import React, { useEffect, useState } from 'react';

import RequestList from './RequestList';
const NewRequestForm = () => {
  const [farmacias, setFarmacias] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);
  const [newRequest, setNewRequest] = useState({
    farmacia: '',
    medicamento: '',
    precoUnit: '',
    quantidade: '',
    precoTotal: '',
  });

  const [pedidos, setPedidos] = useState([]);
  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewRequest({ ...newRequest, [name]: value });
  };

  useEffect(() => {
    fetch('http://localhost:3001/pedidos')
      .then((res) => res.json())
      .then((data) => setPedidos(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/farmacias')
      .then((res) => res.json())
      .then((data) => setFarmacias(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/medicamentos')
      .then((res) => res.json())
      .then((data) => setMedicamentos(data));
  }, []);

  useEffect(() => {
    const setPrecoUnit = () => {
      medicamentos.filter((medicamento) => {
        if (newRequest.medicamento === medicamento.medicamento) {
          return setNewRequest((prev) => {
            return { ...prev, precoUnit: medicamento.precoUnit };
          });
        }
        return null;
      });
    };
    setPrecoUnit();
  }, [medicamentos, newRequest.medicamento]);

  useEffect(() => {
    const setPrecoTotal = () => {
      if (newRequest.quantidade && newRequest.precoUnit) {
        const qntd = parseFloat(newRequest.quantidade);
        const preco = parseFloat(newRequest.precoUnit);
        const total = qntd * preco;
        setNewRequest((prev) => {
          return { ...prev, precoTotal: total };
        });
      }
    };
    setPrecoTotal();
  }, [newRequest.quantidade, newRequest.precoUnit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      newRequest.farmacia &&
      newRequest.medicamento &&
      parseFloat(newRequest.quantidade) > 0
    ) {
      postApi();
    }
  };
  const postApi = () => {
    fetch('http://localhost:3001/pedidos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRequest),
    }).then(() => {
      getPedidosData();
    });
  };

  const getPedidosData = async () => {
    fetch('http://localhost:3001/pedidos')
      .then((res) => res.json())
      .then((data) => setPedidos(data));
  };

  return (
    <>
      <h6>Novo Pedido</h6>
      <form
        action=""
        style={{ background: '#eee', borderRadius: '12px' }}
        className="px-2 py-3 row"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="col-sm-12 col-md-6 col-lg-3 mt-2 ">
          <h6>Farmácia</h6>
          <select
            required
            name="farmacia"
            id="farmacia"
            className="form-select form-select-sm"
            onChange={(e) => {
              setNewRequest((prev) => {
                return { ...prev, farmacia: e.target.value };
              });
            }}
          >
            {farmacias.map((farmacia) => {
              return (
                <option
                  value={farmacia.informacoes.razaoSocial}
                  key={farmacia.id}
                >
                  {farmacia.informacoes.razaoSocial}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mt-2">
          <h6>Medicamento</h6>
          <select
            required
            name="Medicamento"
            id="Medicamento"
            className="form-select form-select-sm "
            onChange={(e) => {
              setNewRequest((prev) => {
                return { ...prev, medicamento: e.target.value };
              });
            }}
          >
            {medicamentos.map((medicamento) => {
              return (
                <option value={medicamento.medicamento} key={medicamento.id}>
                  {medicamento.medicamento}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mt-2 ">
          <h6>Preço Unitário</h6>
          <input
            type="number"
            name="precoUnit"
            id="precoUnit"
            value={newRequest.precoUnit}
            onChange={(e) => {}}
            className="form-control"
            style={{ height: '29px' }}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mt-2 ">
          <h6>Quantidade</h6>
          <input
            type="number"
            name="quantidade"
            id="quantidade"
            value={newRequest.quantidade}
            onChange={(e) => {
              handleForm(e);
            }}
            className="form-control"
            style={{ height: '29px' }}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mt-2 ">
          <h6>Preço Total</h6>
          <input
            type="number"
            name="precoTotal"
            id="precoTotal"
            value={newRequest.precoTotal}
            onChange={(e) => {
              setNewRequest((prev) => {
                return { ...prev, precoTotal: e.target.value };
              });
            }}
            className="form-control"
            style={{ height: '29px' }}
          />
        </div>
        <button
          className="btn btn-primary  mx-auto mt-3 px-md-5 text-center"
          type="submit"
          style={{ color: 'white', width: '25vw' }}
        >
          Cadastrar
        </button>
      </form>
      <h6 className="mt-4">Lista de Pedidos</h6>
      <RequestList pedidos={pedidos} getPedidosData={getPedidosData} />
    </>
  );
};

export default NewRequestForm;
