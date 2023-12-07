import { createContext, useContext, useState } from 'react';
import { PropsRota } from '../types/PropsRota';

const RotaContext = createContext({} as PropsRota);

export function RotaProvider({ children }:any) {
  const [rotaAtual, setRotaAtual] = useState('');
  const [pagina, setPagina] = useState(true);

  const setNovaRota = (novaRota:any) => {
    setRotaAtual(novaRota);
  };

  const setPaginaAtual = (novaRota:any) => {
    setPagina(novaRota);
  };

  return (
    <RotaContext.Provider value={{ rotaAtual, setNovaRota, pagina, setPaginaAtual }}>
      {children}
    </RotaContext.Provider>
  );
}

export function useRota() {
  const context = useContext(RotaContext);
  return context;
}
