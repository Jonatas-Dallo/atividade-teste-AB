import { Router, Request, Response } from "express";
import usuario from "./usuario";

const routes = Router();
routes.use("/usuario", usuario);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;