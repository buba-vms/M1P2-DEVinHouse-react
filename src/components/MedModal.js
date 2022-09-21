import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NumericFormat } from 'react-number-format';

function MedModal({ props }) {
  const { show, handleClose, remedio } = props;

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ maxWidth: '95vw', fontSize: '18px' }}
        className="text-start"
      >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title
            className="row "
            style={{ fontSize: '22px' }}
          ></Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ fontSize: '16px', margin: '0 auto' }}
          className="row"
        >
          <p className="col-6">
            <b>Medicamento: </b>
            {remedio.medicamento}
          </p>
          <p className="col-6">
            <b>Laboratório: </b>
            {remedio.laboratorio}
          </p>
          <p className="col-6">
            <b>Dosagem: </b>
            {remedio.dosagem}
          </p>
          <p className="col-6">
            <b>Tipo: </b>
            {remedio.tipo}
          </p>
          <p className="col-6">
            <b>Preço Unitário: </b>
            <NumericFormat
              value={remedio.precoUnit}
              displayType="text"
              valueIsNumericString
              prefix="R$ "
              decimalSeparator=","
            />
          </p>
          <div
            className="col-12 mx-auto "
            style={{ background: '#eee', width: '96%', borderRadius: '8px' }}
          >
            <div
              className="container overflow-auto my-3 text-wrap"
              style={{ height: '55vh' }}
            >
              <p className="text-break"> {remedio.descricao}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer onClick={handleClose}>
          <Button variant="primary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MedModal;
