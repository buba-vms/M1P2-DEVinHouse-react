import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div>
      <h6>Página não encontrada</h6>
      <Link to="/">Voltar para Página de Login</Link>
    </div>
  );
};

export default PageNotFound;
