import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useRota } from '../../Context/RotaContext';
import Pagina1 from '../Pagina1';
import Pagina2 from '../Pagina2';
import axios from 'axios';

interface Usuario {
  id_unico: string;
  variante: string;
  // outras propriedades
}

export default function Intermediario() {
    const { rotaAtual, setNovaRota } = useRota();
    const location = useLocation();
    const id = location.pathname.replace('/bicicleta/', '');

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(`http://localhost:3001/usuario/getAll`).then((response) => {
                const usuarioEncontrado = response.data.find((user: Usuario) => user.id_unico === id);

                if (usuarioEncontrado) {
                    console.log("usuarioEncontrado", usuarioEncontrado);
                    setNovaRota(usuarioEncontrado.variante);
                } 
            }).catch((error) => {
                console.error('Erro na chamada da API:', error);
            });
        }, 100);

        // Limpando o intervalo quando o componente é desmontado ou quando a dependência 'id' muda
        return () => clearInterval(interval);

    }, []);

    return (
        <Routes>
            {rotaAtual === 'variante1' && <Route path={`/${id}`} element={<Pagina1 />} />}
            {rotaAtual === 'variante2' && <Route path={`/${id}`} element={<Pagina2 />} />}
        </Routes>
    );
}