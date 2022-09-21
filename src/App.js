import React from 'react';
import PharmacyAppRoutes from './rotas/PharmacyAppRoutes';
import PharmacyControlProvider from './context/PharmacyControlContext';
import AppProvider from './context/PharmacyAppContext';
import MedsControlProvider from './context/MedsContext';

const App = () => {
  return (
    <AppProvider>
      <PharmacyControlProvider>
        <MedsControlProvider>
          <PharmacyAppRoutes />
        </MedsControlProvider>
      </PharmacyControlProvider>
    </AppProvider>
  );
};

export default App;
