import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/PharmacyAppContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const { handleLogged } = useAppContext();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  // lembre-se de validar os campos de email e senha, não basta apenas verificar se o campo está vazio ou seu tamanho
  // é necessário informar ao usuário que o campo está inválido e não deixar que ele envie o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email && login.password.length >= 8) {
      handleLogged(true);
      navigate('/mapa');
    }
  };

  return (
    <section
      className="vh-100 gradient-form"
      style={{ backgroundColor: '#eee' }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div
                      className="text-center bg-main h-100"
                      style={{
                        borderRadius: '15px',
                        width: '70',
                        margin: '0 auto',
                      }}
                    >
                      <h4 className="mt-1 mb-5 py-2 align-text-center">
                        DEVinPharmacy
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p>Digite seu email e sua senha para logar: </p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          area-aria-describedby="email"
                          placeholder="exemplo@email.com "
                          value={login.email || ''}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          value={login.password}
                          onChange={(e) => handleChange(e)}
                        />
                        <label className="form-label" htmlFor="password">
                          Senha
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn  btn-block fa-lg gradient-custom-2 mb-3 bg-main"
                          type="submit"
                        >
                          Log in
                        </button>
                        {/* Lembre de não usar href com React, pois toda a aplicação é renderizada novamente */}
                        <a className="text-muted mx-2" href="#!">
                          Forgot password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2 bg-main">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4>Desenvolvendo talentos</h4>
                    <h4 className="mb-4">Criando Oportunidades</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
