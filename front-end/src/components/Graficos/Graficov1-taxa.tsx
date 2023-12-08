import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useRota } from '../../Context/RotaContext';

const Graficov1Taxa = () => {
  const { grafico } = useRota();

  if (!grafico || !grafico.variante1) {
    return <div>Carregando...</div>;
  }

  const data = [
    { valor: grafico.varianteTaxa1 },
  ];

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
      <Tooltip />
      <Legend />
      <Bar dataKey="valor" fill="rgb(144, 238, 144)" />
    </BarChart>
  );
};

export default Graficov1Taxa;
