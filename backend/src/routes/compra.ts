import { Router, Request, Response } from "express";
import compra from "../controllers/compra";

const routes = Router();

routes.post('/post', compra.create);
routes.get('/get', compra.getById);
routes.get('/getAll', compra.getAll);
routes.put('/put', compra.update);
routes.delete('/delete', compra.delete);


routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;