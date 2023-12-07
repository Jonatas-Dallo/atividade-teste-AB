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
      // Enviar dados para o backend
      await axios.post('http://localhost:3001/usuario/post', {
        email: email,
        variante: variante,
        id_unico: id_unico,
        acessou: 0,
        comprou: 0,
      });

      console.log(email);
      

      // Enviar e-mail com o link
      const response = await axios.post('http://localhost:3001/enviar-email', {
        destinatario: email,
        assunto: 'Acesse nossa página e veja nossa bicicleta',
        corpo: `Acesse: http://localhost:3000/bicicleta/${id_unico}`,
      });

      console.log(response)

      window.alert('Cadastro realizado com sucesso!');
      // Limpar os campos após o cadastro
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
