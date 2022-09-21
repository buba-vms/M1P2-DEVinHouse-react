import React from 'react';

import { Link } from 'react-router-dom';
import { AppContext } from '../context/PharmacyAppContext';

const NavMenu = () => {
  const btnStyle = {
    fontSize: '10px',
    fontWeight: '200',
    textDecoration: 'none',
  };

  return (
    <AppContext.Consumer>
      {(value) => {
        const { pagina, handleLinkActive, handleLogged } = value;
        return (
          <>
            <nav className="container-fluid bg-main ">
              <div className="container row mx-auto py-2 ">
                <div className="col text-center text-md-start  ">
                  <span
                    className="pt-1"
                    style={{ fontSize: '22px', fontWeight: '400' }}
                  >
                    DEVinPharmacy
                  </span>
                </div>
                <div className="col">
                  <div className="row justify-content-center">
                    <div className="col text-center  col-lg-3 col-md-6 col-12">
                      <Link to="/cadastros" style={{ color: 'white' }}>
                        <button
                          className={`btn btn-primary ${
                            pagina === 'cadastro' && 'active'
                          }`}
                          style={btnStyle}
                          onClick={() => handleLinkActive('cadastro')}
                        >
                          Cadastros
                        </button>
                      </Link>
                    </div>
                    <div className="col text-center  col-lg-3 col-md-6 col-12">
                      <Link to="/mapa" style={{ color: 'white' }}>
                        <button
                          className={`btn btn-primary ${
                            pagina === 'mapa' ? 'active' : null
                          }`}
                          style={btnStyle}
                          onClick={() => handleLinkActive('mapa')}
                        >
                          Mapa
                        </button>
                      </Link>
                    </div>
                    <div className="col text-center  col-lg-3 col-md-6 col-12">
                      <Link
                        to="/lista-de-medicamentos"
                        style={{ color: 'white' }}
                      >
                        <button
                          className={`btn btn-primary ${
                            pagina === 'medicamentos' ? 'active' : null
                          }`}
                          style={btnStyle}
                          onClick={() => {
                            handleLinkActive('medicamentos');
                          }}
                        >
                          Medicamentos
                        </button>
                      </Link>
                    </div>
                    <div className="col  text-center  col-lg-3 col-md-6 col-12 ">
                      <Link to="/gerenciamento" style={{ color: 'white' }}>
                        <button
                          className={`btn btn-primary ${
                            pagina === 'gerenciamento' ? 'active' : null
                          }`}
                          style={btnStyle}
                          onClick={() => handleLinkActive('gerenciamento')}
                        >
                          Gerenciamento
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <footer
              className="fixed-bottom text-end"
              style={{ background: 'grey', minHeight: '4vh' }}
            >
              <div className="container " style={{ width: '75vw' }}>
                <button
                  onClick={() => {
                    handleLogged(false);
                  }}
                  className="btn btn-grey mt-1 "
                  style={{ fontSize: '10px' }}
                >
                  deslogar
                </button>
              </div>
            </footer>
          </>
        );
      }}
    </AppContext.Consumer>
  );
};

export default NavMenu;
