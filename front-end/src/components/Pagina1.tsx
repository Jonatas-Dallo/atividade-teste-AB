import { useEffect } from "react";
import "./index.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

interface Usuario {
    id_unico: string;
    variante: string;
}

export default function Pagina1() {
    const location = useLocation();
    const id = location.pathname.replace('/bicicleta/', '');

    useEffect(() => {

        const acessouAnterior = Cookies.get('acessouAnterior');


        if (!acessouAnterior) {
            axios.get(`http://40.76.110.239:3001/usuario/getAll`).then((response) => {
                const usuarioEncontrado = response.data.find((user: Usuario) => user.id_unico === id);

                if (usuarioEncontrado) {
                    let soma = usuarioEncontrado.acessou + 1;

                    axios.put(`http://40.76.110.239:3001/usuario/put`, { id: usuarioEncontrado.id, acessou: soma }).then((putResponse) => {
                        console.log('Atualizado com sucesso:', putResponse.data);
                    }).catch((putError) => {
                        console.error('Erro ao atualizar:', putError);
                    });

                    Cookies.set('acessouAnterior', 'true', { expires: 1/3 }); 
                }
            }).catch((error) => {
                console.error('Erro na chamada da API:', error);
            });
        }
    }, []);

    const handleCompra = () => {

        const compraAnterior = Cookies.get('compraAnterior');

        const confirmacao = window.confirm("Deseja confirmar a compra?");

        if (confirmacao) {
            axios.get(`http://localhost:3001/usuario/getAll`).then((response) => {
                const usuarioEncontrado = response.data.find((user: Usuario) => user.id_unico === id);

                const soma = usuarioEncontrado.comprou + 1;

                if (!compraAnterior) {
                    axios.put(`http://localhost:3001/usuario/put`, { id: usuarioEncontrado.id, comprou: soma })
                    Cookies.set('compraAnterior', 'true', { expires: 1/3 });
                }


                window.alert('Compra realizada com sucesso!');
            })
        }
    };

    return (
        <div id="principal">
            <div id="container">
                <h1>Bem-vindo à nossa loja de bicicletas!</h1>
                <p>Compre a bicicleta perfeita para suas aventuras.</p>

                <div id="produto">
                    <h2>
                        Pedale com propósito!
                    </h2>
                    <p id="texto"> Nossa bicicleta não é apenas um veículo, é uma escolha consciente para um mundo mais verde. Feita com
                        materiais sustentáveis e design eco-friendly 1, nossa bicicleta não só proporciona uma viagem suave, mas
                        também é um compromisso com a preservação do meio ambiente. Junte-se a nós nessa jornada e faça parte da
                        mudança pedalando em direção a um futuro mais sustentável e saudável para todos.
                    </p>
                    <img src="https://static3.tcdn.com.br/img/img_prod/394779/bicicleta_eletrica_29_gts_m1_freio_a_disco_7v_shimano_suspensao_e_bike_draven_190w_3385_1_86d1b90ceb3dbd4dd276a6155ee27655.jpg" alt="Bicicleta" />
                    <h2>Bicicleta V235 Cinza</h2>
                    <p>Uma bicicleta de marcha e banco ajustável para suas necessidades.</p>
                    <p id="preco">R$ 1.999,00</p>
                    <button id="botao-comprar" onClick={handleCompra}>Comprar</button>
                </div>
            </div>
        </div>
    );
}
