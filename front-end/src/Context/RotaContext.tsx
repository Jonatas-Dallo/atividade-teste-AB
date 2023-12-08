import { createContext, useContext, useState } from 'react';
import { PropsRota } from '../types/PropsRota';

const RotaContext = createContext({} as PropsRota);

export function RotaProvider({ children }:any) {
  const [rotaAtual, setRotaAtual] = useState('');
  const [grafico, setGrafico] = useState();

  const setNovaRota = (novaRota:any) => {
    setRotaAtual(novaRota);
  };

  const setGraficoTaxa = (novaRota:any) => {
    setGrafico(novaRota);
  };

  return (
    <RotaContext.Provider value={{ rotaAtual, setNovaRota, grafico, setGrafico, setGraficoTaxa }}>
      {children}
    </RotaContext.Provider>
  );
}

export function useRota() {
  const context = useContext(RotaContext);
  return context;
}
