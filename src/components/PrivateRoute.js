import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/PharmacyAppContext';
const PrivateRoute = () => {
  const { isLogged } = useAppContext();

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
