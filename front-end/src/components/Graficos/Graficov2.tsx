import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useRota } from '../../Context/RotaContext';

const Graficov2 = () => {
  const { grafico } = useRota();

  if (!grafico || !grafico.variante2) {
    return <div>Carregando...</div>;
  }

  const data = [
    { name: 'Acessos', valor: grafico.variante2.totalAcessou },
    { name: 'Compras', valor: grafico.variante2.totalComprou },
  ];

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="valor" fill="rgba(75,192,192,1)" />
    </BarChart>
  );
};

export default Graficov2;
