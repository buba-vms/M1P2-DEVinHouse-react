import React from 'react';
import { PharmacyControlContext } from '../context/PharmacyControlContext';
import InputItem from './InputItem';
import Underline from './Underline';
import FormButtons from './FormButtons';
const PharmacyForm = () => {
  return (
    <PharmacyControlContext.Consumer>
      {(value) => {
        const {
          informacoes,
          handleInformacoes,
          endereco,
          handleEndereco,
          geoLoc,
          handleSubmit,
          clearTotal,
        } = value;
        const { razaoSocial, CNPJ, nomeFantasia, email, telefone, celular } =
          informacoes;
        const { cep, logradouro, complemento, bairro, localidade, uf, numero } =
          endereco;

        return (
          <>
            <h6>Nova Farmácia</h6>
            <form
              action=""
              style={{ background: '#eee', borderRadius: '12px' }}
              className="px-2 py-3 row"
              onSubmit={handleSubmit}
            >
              <div className="input-group row" style={{ margin: '0 auto' }}>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                  <InputItem
                    type="text"
                    name="razaoSocial"
                    value={razaoSocial}
                    handleFunc={handleInformacoes}
                    label={'Razão Social'}
                    required
                    min={5}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                  <InputItem
                    type="text"
                    name="CNPJ"
                    value={CNPJ}
                    handleFunc={handleInformacoes}
                    label={'CNPJ'}
                    min={14}
                    max={14}
                    placeholder={'Apenas Números'}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                  <InputItem
                    type="test"
                    name="nomeFantasia"
                    value={nomeFantasia}
                    handleFunc={handleInformacoes}
                    label={'Nome Fantasia'}
                    min={5}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                  <InputItem
                    type="email"
                    name="email"
                    value={email}
                    handleFunc={handleInformacoes}
                    label={'Email'}
                    min={5}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                  <InputItem
                    type="text"
                    name="telefone"
                    value={telefone}
                    handleFunc={handleInformacoes}
                    label={'Telefone'}
                    placeholder={'Apenas Números'}
                    isRequeired={false}
                    min={11}
                    max={15}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                  <InputItem
                    type="text"
                    name="celular"
                    value={celular}
                    handleFunc={handleInformacoes}
                    label={'Celular'}
                    min={11}
                    max={15}
                    placeholder={'Apenas Números'}
                  ></InputItem>
                </div>
                <Underline />
                <div className="col-sm-12 col-md-5 col-lg-3 mt-2">
                  <InputItem
                    type="text"
                    name="cep"
                    value={cep || ''}
                    handleFunc={handleEndereco}
                    label={'CEP'}
                    min={8}
                    max={9}
                    placeholder={'Apenas Números'}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-7 mt-2">
                  <InputItem
                    type="text"
                    name="logradouro"
                    value={logradouro || ''}
                    handleFunc={handleEndereco}
                    label={'Logradouro'}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-2 mt-2">
                  <InputItem
                    type="number"
                    name="numero"
                    value={numero || ''}
                    handleFunc={handleEndereco}
                    label={'Número'}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                  <InputItem
                    type="text"
                    name="bairro"
                    value={bairro || ''}
                    handleFunc={handleEndereco}
                    label={'Bairro'}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                  <InputItem
                    type="text"
                    name="localidade"
                    value={localidade || ''}
                    handleFunc={handleEndereco}
                    label={'Cidade'}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                  <InputItem
                    type="text"
                    name="uf"
                    value={uf || ''}
                    handleFunc={handleEndereco}
                    label={'Estado'}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8 mt-2">
                  <InputItem
                    type="text"
                    name="complemento"
                    value={complemento || ''}
                    handleFunc={handleEndereco}
                    label={'Complemento'}
                    isRequeired={false}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-2 mt-2 ">
                  <InputItem
                    type="number"
                    name="latitude"
                    value={geoLoc[0] || ''}
                    handleFunc={handleEndereco}
                    label={'Latitude'}
                  ></InputItem>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-2 mt-2">
                  <InputItem
                    type="number"
                    name="longitude"
                    value={geoLoc[1] || ''}
                    handleFunc={handleEndereco}
                    label={'Longitude'}
                  ></InputItem>
                </div>
              </div>
              <FormButtons clear={clearTotal} />
            </form>
          </>
        );
      }}
    </PharmacyControlContext.Consumer>
  );
};

export default PharmacyForm;
