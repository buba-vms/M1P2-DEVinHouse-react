import React from 'react';
import { NumericFormat } from 'react-number-format';
const RequestList = ({ pedidos, getPedidosData }) => {
  const deleteRequest = (id) => {
    if (window.confirm('Tem certeza que deseja deletar este pedido?')) {
      fetch(`http://localhost:3001/pedidos/${id}`, {
        method: 'DELETE',
      }).then(() => getPedidosData());
    }
  };
  return (
    <>
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
                <th scope="col">Quantidade</th>
                <th scope="col">Preço Unitário</th>
                <th scope="col">Preço Total</th>
                <th scope="col">Destino</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {pedidos.map((pedido, index) => {
                if (index === 0) {
                  return null;
                }
                return (
                  <tr key={pedido.id} className="mt-5">
                    <td>{pedido.medicamento}</td>
                    <td>{pedido.quantidade}</td>
                    <td>
                      <NumericFormat
                        value={pedido.precoUnit}
                        displayType="text"
                        valueIsNumericString
                        prefix="R$ "
                        decimalSeparator=","
                        thousandSeparator="."
                      />
                    </td>
                    <td>
                      <NumericFormat
                        value={pedido.precoTotal}
                        displayType="text"
                        valueIsNumericString
                        prefix="R$ "
                        decimalSeparator=","
                        decimalScale={2}
                        thousandSeparator="."
                      />
                    </td>
                    <td>{pedido.farmacia}</td>
                    <td>
                      <button
                        className="btn  btn-danger bg-danger"
                        style={{ fontSize: '12px' }}
                        onClick={() => {
                          deleteRequest(pedido.id);
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
      </main>
    </>
  );
};

export default RequestList;
