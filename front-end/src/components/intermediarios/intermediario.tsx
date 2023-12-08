import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useRota } from '../../Context/RotaContext';
import Pagina1 from '../Pagina1';
import Pagina2 from '../Pagina2';
import axios from 'axios';

interface Usuario {
  id_unico: string;
  variante: string;
}

export default function Intermediario() {
    const { rotaAtual, setNovaRota, setPaginaAtual } = useRota();
    const location = useLocation();
    const id = location.pathname.replace('/bicicleta/', '');

    useEffect(() => {
            axios.get(`http://localhost:3001/usuario/getAll`).then((response) => {
                const usuarioEncontrado = response.data.find((user: Usuario) => user.id_unico === id);

                if (usuarioEncontrado) {
                    setNovaRota(usuarioEncontrado.variante);
                } 
            }).catch((error) => {
                console.error('Erro na chamada da API:', error);
            });

    }, []);

    return (
        <Routes>
            {rotaAtual === 'variante1' && <Route path={`/${id}`} element={<Pagina1 />} />}
            {rotaAtual === 'variante2' && <Route path={`/${id}`} element={<Pagina2 />} />}
        </Routes>
    );
}
