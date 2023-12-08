import { useEffect } from "react";
import Graficov1 from "./Graficov1";
import Graficov1Taxa from "./Graficov1-taxa";
import Graficov2 from "./Graficov2";
import Graficov2Taxa from "./Graficov2-taxa";
import "./index.css";
import axios from "axios";
import { useRota } from "../../Context/RotaContext";


export default function Graficos() {
    const { grafico, setGraficoTaxa } = useRota()

    useEffect(() => {   
        axios.get('http://40.76.110.239:3001/usuario/taxa').then((response) => {
            setGraficoTaxa(response.data)
        })
    }, [])

    console.log(grafico)

    return(
        <div>
            <div id="grafico">
                <div id="bloco-grafico">
                    <h3 id="titulo">Pagina v1</h3>
                    <Graficov1 />
                    <Graficov1Taxa />
                </div>
                <div id="bloco-grafico">
                    <h3 id="titulo">Pagina v2</h3>
                    <Graficov2 />
                    <Graficov2Taxa />
                </div>  
            </div> 
        </div>
    )
}