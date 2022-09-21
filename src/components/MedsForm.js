import React from 'react';
import InputItem from '../components/InputItem';
import { MedsControlContext } from '../context/MedsContext';
import Underline from './Underline';
import FormButtons from './FormButtons';
const MedsForm = () => {
  return (
    <MedsControlContext.Consumer>
      {(value) => {
        const {
          medicamento: {
            medicamento,
            laboratorio,
            dosagem,
            tipo,
            precoUnit,
            descricao,
          },
          handleMedicamento,
          handleSubmit,
          clearForm,
        } = value;
        return (
          <>
            <h6>Novo Medicamento</h6>
            <form
              action=""
              style={{ background: '#eee', borderRadius: '12px' }}
              className="px-2 py-3 row"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="col-sm-12 col-md-6 col-lg-6 mt-2">
                <InputItem
                  type="text"
                  name="medicamento"
                  value={medicamento}
                  handleFunc={handleMedicamento}
                  label={'Medicamento'}
                ></InputItem>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mt-2">
                <InputItem
                  type="text"
                  name="laboratorio"
                  value={laboratorio}
                  handleFunc={handleMedicamento}
                  label={'Laboratório'}
                ></InputItem>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                <InputItem
                  type="text"
                  name="dosagem"
                  value={dosagem}
                  handleFunc={handleMedicamento}
                  label={'Dosagem'}
                ></InputItem>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                <label htmlFor="tipo">Tipo</label>
                <select
                  className="form-select"
                  name="tipo"
                  id="tipo"
                  value={tipo}
                  required
                  onChange={(e) => {
                    handleMedicamento(e);
                  }}
                >
                  <option value=""> </option>
                  <option value="medicamento-comum">Medicamento Comum</option>
                  <option value="medicamento-controlado">
                    Medicamento Controlado
                  </option>
                </select>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                <InputItem
                  type="number"
                  name="precoUnit"
                  value={precoUnit}
                  handleFunc={handleMedicamento}
                  label={'Preço Unitário'}
                  placeholder={'Apenas Números'}
                ></InputItem>
              </div>
              <Underline />
              <div className="col-sm-12 col-md-12 col-lg-12 mt-2">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  name="descricao"
                  id="descricao"
                  value={descricao}
                  cols="1000"
                  rows="7"
                  className="form-control "
                  onChange={handleMedicamento}
                  style={{ margin: '0 auto' }}
                ></textarea>
              </div>
              <FormButtons clear={clearForm} />
            </form>
          </>
        );
      }}
    </MedsControlContext.Consumer>
  );
};

export default MedsForm;
