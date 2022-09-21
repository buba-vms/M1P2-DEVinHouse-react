import React from 'react';

const FormButtons = ({ clear }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-3"></div>
      <div className="col-3 d-flex justify-content-center mt-3">
        <button
          className="btn btn-danger  mx-1 px-md-5"
          onClick={clear}
          type="button"
        >
          Limpar
        </button>
        <button
          className="btn btn-primary  mx-1 px-md-5"
          type="submit"
          style={{ color: 'white' }}
        >
          Cadastrar
        </button>
      </div>

      <div className="col-3"></div>
    </div>
  );
};

export default FormButtons;
