import { DataTypes, Model } from "sequelize";
import db from "../config/bd_config";

export class Compra extends Model { }
Compra.init({
    id_compra: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    confirmação: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    paginaVersion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false,
        sequelize: db,
        modelName: "compra",
        tableName: "compra",
    }
);