import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graficov1 = () => {
  const data = [
    { name: 'Acessos', valor: 65 },
    { name: 'Compras', valor: 59 },
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

export default Graficov1;
