import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useRota } from '../../Context/RotaContext';

const Graficov2Taxa = () => {
  const { grafico } = useRota();

  if (!grafico || !grafico.variante2) {
    return <div>Carregando...</div>;
  }

  const data = [
    { valor: grafico.varianteTaxa2 },
  ];

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
      <Tooltip />
      <Legend />
      <Bar dataKey="valor" fill="rgba(144, 238, 144)" />
    </BarChart>
  );
};

export default Graficov2Taxa;
