import { Usuario } from "../models/usuario";
import { Request, Response } from "express";

export class ValorController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const valor = await Usuario.create({ ...req.body });

      return res.json(valor);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Valor" + e});
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const valor = await Usuario.findAll();
      return res.json(valor);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Valors" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const valor = await Usuario.findOne({
        where: { id: id },
      });
      return res.json(valor);
    } catch (e) {
      return res.status(500).json({ error: "Valor not found" });
    }
  }

  async getByUniqueId(req: Request, res: Response) {
    const { id_unico } = req.body;
  
    try {
      const usuario = await Usuario.findOne({
        where: { id_unico: id_unico },
      });
  
      if (usuario) {
        return res.json(usuario);
      } else {
        return res.status(404).json({ error: "Usuario not found" });
      }
    } catch (e) {
      return res.status(500).json({ error: "Error finding Usuario" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await Usuario.update(req.body, {
        where: { id: id },
      });

      if (updated) {
        const updatedValor = await Usuario.findOne({
          where: { id: id },
        });
        return res.json(updatedValor);
      }

      throw new Error("Valor not found");
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const ValorToBeDeleted = await Usuario.findOne({
        where: { id_valor: id },
      });

      if (!ValorToBeDeleted) {
        return res.status(404).json({ error: "Valor not found" });
      }
      await ValorToBeDeleted.destroy();
      return res.sendStatus(204);
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Valor" });
    }
  }
}

export default new ValorController();
