import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import Map from '../pages/Map';

import MedList from '../pages/MedList';

import Register from '../pages/Register';
import Managment from '../pages/Managment';
import PrivateRoute from '../components/PrivateRoute';
const PharmacyAppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/mapa" element={<Map />} />
          <Route path="/lista-de-medicamentos" element={<MedList />} />
          <Route path="/cadastros" element={<Register />} />
          <Route path="/gerenciamento" element={<Managment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PharmacyAppRoutes;
