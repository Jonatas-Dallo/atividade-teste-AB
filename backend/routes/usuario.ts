import { Router, Request, Response } from "express";
import usuario from "../controllers/usuario";

const routes = Router();

routes.post('/post', usuario.create);
routes.get('/get', usuario.getById);
routes.get('/getAll', usuario.getAll);
routes.post('/acessarPagina/', usuario.getByUniqueId);
routes.put('/put', usuario.update);
routes.delete('/delete', usuario.delete);


routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;