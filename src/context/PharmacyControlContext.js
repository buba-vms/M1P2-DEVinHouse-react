import { useState, useEffect } from 'react';
import { createContext } from 'react';

const PharmacyControlContext = createContext();

const PharmacyControlProvider = ({ children }) => {
  const [informacoes, setInformacoes] = useState({
    razaoSocial: '',
    CNPJ: '',
    nomeFantasia: '',
    email: '',
    telefone: '',
    celular: '',
  });

  const [endereco, setEndereco] = useState({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    numero: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: '',
  });

  const [geoLoc, setGeoLoc] = useState([0, 0]);

  useEffect(() => {
    const fetchGeoLoc = async () => {
      const json = await fetch(
        `https://maps.google.com/maps/api/geocode/json?components=country:BR|postal_code:${endereco.cep}&sensor=false&key=[INSERIR_CHAVE_GOOGE_AQUI_REMOVER_COLCHETES]`
      );

      const data = await json.json();

      if (data.status === 'OK') {
        const { lat, lng } = data.results[0].geometry.location;

        setGeoLoc([lat, lng]);
      }
      if (data.status === 'ZERO_RESULTS') {
        alert('cpf não encontrado digite novamente');
        setEndereco({ ...endereco, cep: '' });
        setGeoLoc([]);
      }
    };
    //
    const fetchData = async () => {
      const json = await fetch(
        `https://viacep.com.br/ws/${endereco.cep}/json/`
      );

      const data = await json.json();
      if (data.erro) {
        clearEndereco();

        return;
      }
      if (data.cep) {
        setEndereco(data);
      }
      if (data.cep && data.logradouro && data.localidade && data.uf) {
        await fetchGeoLoc();
      }
    };

    if (endereco.cep.length) {
      if (endereco.cep.length === 8) {
        fetchData().catch((err) => {
          console.error(err);
          clearEndereco();
        });
      }
    }
  }, [endereco]);

  const handleInformacoes = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInformacoes((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEndereco = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEndereco((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const clearEndereco = () => {
    setEndereco({
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      numero: '',
      ibge: '',
      gia: '',
      ddd: '',
      siafi: '',
    });

    setGeoLoc([0, 0]);
  };

  const clearTotal = () => {
    clearEndereco();
    setInformacoes({
      razaoSocial: '',
      CNPJ: '',
      nomeFantasia: '',
      email: '',
      telefone: '',
      celular: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isNaN(parseFloat(informacoes.CNPJ)) ||
      isNaN(parseFloat(informacoes.telefone)) ||
      isNaN(parseFloat(informacoes.celular))
    ) {
      alert('Digite apenas números nos campos solicitados');
      return;
    }
    postApi();
    alert(
      `Farmácia ${informacoes.razaoSocial}, CNPJ: ${informacoes.CNPJ} cadastrada com sucesso`
    );
  };

  const postApi = () => {
    fetch('http://localhost:3001/farmacias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ informacoes, endereco, geoLoc }),
    });
  };

  return (
    <PharmacyControlContext.Provider
      value={{
        informacoes,
        handleInformacoes,
        endereco,
        handleEndereco,
        geoLoc,
        clearTotal,
        handleSubmit,
      }}
    >
      {children}
    </PharmacyControlContext.Provider>
  );
};

export default PharmacyControlProvider;
export { PharmacyControlContext };
