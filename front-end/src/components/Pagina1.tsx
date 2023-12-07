import "./index.css";
import axios from "axios";

export default function Pagina1() {
    const handleCompra = () => {
        
        const confirmacao = window.confirm("Deseja confirmar a compra?");

        // if (confirmacao) {
        //     axios.post('http://localhost:3001/compra/post', {
        //         confirmação: true,
        //         paginaVersion: "v1",
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
                    <h2>
                        Pedale com propósito!
                    </h2>
                    <p id="texto"> Nossa bicicleta não é apenas um veículo, é uma escolha consciente para um mundo mais verde. Feita com
                        materiais sustentáveis e design eco-friendly, nossa bicicleta não só proporciona uma viagem suave, mas
                        também é um compromisso com a preservação do meio ambiente. Junte-se a nós nessa jornada e faça parte da
                        mudança pedalando em direção a um futuro mais sustentável e saudável para todos.
                    </p>
                    <img src="https://blog.bikeregistrada.com.br/wp-content/uploads/2023/08/Porsche2.jpeg" alt="Bicicleta" />
                    <h2>Bicicleta V235 Cinza</h2>
                    <p>Uma bicicleta de marcha e banco ajustável para suas necessidades.</p>
                    <p id="preco">R$ 1.999,00</p>
                    <button id="botao-comprar" onClick={handleCompra}>Comprar</button>
                </div>
            </div>
        </div>
    );
}
