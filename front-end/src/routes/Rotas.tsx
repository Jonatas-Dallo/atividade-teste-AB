import { Route, Routes } from "react-router-dom";
import Intermediario from "../components/intermediarios/intermediario";
import Cadastro from "../components/Cadastro";

export default function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/bicicleta/*" element={<Intermediario />} />
        </Routes>
    )
}