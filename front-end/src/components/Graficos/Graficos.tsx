import Graficov1 from "./Graficov1";
import Graficov2 from "./Graficov2";
import "./index.css";


export default function Graficos() {
    return(
        <div>
            <div id="bloco-grafico">
                <h3 id="titulo">Pagina v1</h3>
                <Graficov1 />
            </div>
            <div id="bloco-grafico">
                <h3 id="titulo">Pagina v2</h3>
                <Graficov2 />
            </div>   
        </div>
    )
}