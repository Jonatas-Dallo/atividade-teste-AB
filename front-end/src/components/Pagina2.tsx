import "./index.css";
import axios from "axios";

export default function Pagina2() {
    const handleCompra = () => {
        
        const confirmacao = window.confirm("Deseja confirmar a compra?");

        // if (confirmacao) {
        //     axios.post('http://localhost:3001/compra/post', {
        //         confirmação: true,
        //         paginaVersion: "v2",
        //     });
        //     window.alert("Compra realizada com sucesso!");
        // } else {
        //     window.alert("Compra cancelada.");
        // }
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
                            <li><strong>Cor Cinza Estilosa:</strong> Design elegante e moderno que se destaca entre as opções de cores
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