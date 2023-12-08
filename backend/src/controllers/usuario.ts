import { Usuario } from "../models/usuario";
import { Request, Response } from "express";

export class ValorController {

  async Taxa(req: Request, res: Response) {
    try {
      const usuariosVariante1 = await Usuario.findAll({
        where: {
          variante: 'variante1'
        }
      });
  
      const usuariosVariante2 = await Usuario.findAll({
        where: {
          variante: 'variante2'
        }
      });
  
      function calcularTotais(usuarios: any) {
        let totalAcessou = 0;
        let totalComprou = 0;
  
        for (const usuario of usuarios) {
          totalAcessou += usuario.acessou || 0;
          totalComprou += usuario.comprou || 0;
        }
  
        return { totalAcessou, totalComprou };
      }
  
      function calcularTaxaDeConversao({ totalAcessou, totalComprou }: { totalAcessou: number, totalComprou: number }) {
      const percentualAcessou = 100; 

      const taxa = (totalComprou * percentualAcessou) / totalAcessou;

      return taxa.toFixed(2);
      }
  
      const totalVariante1 = calcularTotais(usuariosVariante1);
      const totalVariante2 = calcularTotais(usuariosVariante2);
  
      const taxaVariante1 = calcularTaxaDeConversao(totalVariante1);
      const taxaVariante2 = calcularTaxaDeConversao(totalVariante2);
  
      return res.json({
        variante1: totalVariante1,
        varianteTaxa1: taxaVariante1,
        variante2: totalVariante2,
        varianteTaxa2: taxaVariante2
      });
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Valors" });
    }
  }
  

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const valor = await Usuario.create({ ...req.body });

      return res.json(valor);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Valor" + e });
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
