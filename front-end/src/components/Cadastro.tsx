import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [variante, setVariante] = useState('');

  const id_unico = uuidv4();

  const handleCadastro = async () => {
    try {

      await axios.post('http://40.76.110.239:3001/usuario/post', {
        email: email,
        variante: variante,
        id_unico: id_unico,
        acessou: 0,
        comprou: 0,
      });

      console.log(email);
      
      const response = await axios.post('http://40.76.110.239:3001/enviar-email', {
        destinatario: email,
        assunto: 'Acesse nossa página e veja nossa bicicleta',
        corpo: `Link: http://40.76.110.239:3000/bicicleta/${id_unico}`,
      });

      console.log(response)

      window.alert('Cadastro realizado com sucesso!');

      setEmail('');
      setVariante('');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <div className="containerCadastro">
      <div className="formContainer">
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </label>

        <div className="varianteContainer">
          <label>
            Variante:
            <select
              value={variante}
              onChange={(e) => setVariante(e.target.value)}
              className="dropdown"
            > 
              <option value="">Selecione...</option>
              <option value="variante1">Variante 1</option>
              <option value="variante2">Variante 2</option>
            </select>
          </label>
        </div>

        <button onClick={handleCadastro} className="button">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
