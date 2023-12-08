import { useEffect } from "react";
import "./index.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

interface Usuario {
    id_unico: string;
    variante: string;
}

export default function Pagina2() {
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
            axios.get(`http://40.76.110.239:3001/usuario/getAll`).then((response) => {
                const usuarioEncontrado = response.data.find((user: Usuario) => user.id_unico === id);

                const soma = usuarioEncontrado.comprou + 1;

                if (!compraAnterior) {
                    axios.put(`http://40.76.110.239:3001/usuario/put`, { id: usuarioEncontrado.id, comprou: soma })
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
                    <img src="https://static3.tcdn.com.br/img/img_prod/394779/bicicleta_eletrica_29_gts_m1_freio_a_disco_7v_shimano_suspensao_e_bike_draven_190w_3385_1_86d1b90ceb3dbd4dd276a6155ee27655.jpg"
                        alt="Bicicleta" />
                    <h2>Bicicleta V235 Cinza</h2>
                    <p>Uma bicicleta de marcha e banco ajustavel para suas necessidades.</p>
                    <p id="preco">R$ 1.999,00</p>
                    <button id="botao-comprar" onClick={handleCompra}>Comprar</button>

                    <div id="caix-especificacoes">
                        <h3>
                            Especificações
                        </h3>
                        <ul>
                            <li><strong>Cor Cinza Estilosa 2:</strong> Design elegante e moderno que se destaca entre as opções de cores
                                tradicionais.</li>
                            <li><strong>Marcha Variável:</strong> Sistema de marchas que oferece versatilidade para diferentes tipos de
                                terreno e níveis de dificuldade.</li>
                            <li><strong>Banco Ajustável:</strong> Possui um banco ergonômico e ajustável, proporcionando conforto
                                personalizável para ciclistas de diferentes alturas.</li>
                            <li><strong>Material de Qualidade:</strong> Estrutura construída com materiais duráveis e de alta qualidade,
                                garantindo resistência e longevidade.</li>
                            <li><strong>Freios Eficientes:</strong> Freios de alta performance para uma parada segura e rápida em
                                diferentes condições de terreno e clima.</li>
                            <li><strong>Rodas Duráveis:</strong> Rodas robustas e resistentes, capazes de enfrentar diferentes tipos de
                                superfícies sem comprometer a estabilidade.</li>
                            <li><strong>Peso Leve:</strong> Construção leve para facilitar o transporte e manuseio quando necessário.
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}