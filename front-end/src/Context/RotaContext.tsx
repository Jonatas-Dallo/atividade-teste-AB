import { createContext, useContext, useState } from 'react';
import { PropsRota } from '../types/PropsRota';

const RotaContext = createContext({} as PropsRota);

export function RotaProvider({ children }:any) {
  const [rotaAtual, setRotaAtual] = useState('');

  const setNovaRota = (novaRota:any) => {
    setRotaAtual(novaRota);
  };

  return (
    <RotaContext.Provider value={{ rotaAtual, setNovaRota }}>
      {children}
    </RotaContext.Provider>
  );
}

export function useRota() {
  const context = useContext(RotaContext);
  return context;
}
