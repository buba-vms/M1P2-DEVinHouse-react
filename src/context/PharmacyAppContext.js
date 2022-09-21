import { useState } from 'react';
import { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //NavBar
  const [pagina, setPagina] = useState('');
  const handleLinkActive = (pagina) => {
    console.log(pagina);
    setPagina(pagina);
  };

  const [isLogged, setIsLogged] = useState(true);
  const handleLogged = (status) => {
    setIsLogged(status);
  };

  return (
    <AppContext.Provider
      value={{ pagina, handleLinkActive, isLogged, handleLogged }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
export { AppContext, useAppContext };
