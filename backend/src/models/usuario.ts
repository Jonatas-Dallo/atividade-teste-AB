import { DataTypes, Model } from "sequelize";
import db from "../config/bd_config";

export class Usuario extends Model { }
Usuario.init({
    id_acesso: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    id_unico: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    variante: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    acessou: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comprou: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
},
    {
        timestamps: false,
        sequelize: db,
        modelName: "usuario",
        tableName: "usuario",
    }
);