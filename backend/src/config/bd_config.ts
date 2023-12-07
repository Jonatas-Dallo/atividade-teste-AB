import { Sequelize } from 'sequelize';

// const db = new Sequelize('atividadeAB', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: true
// });

const db = new Sequelize('postgresql://poseidombot:B5UlvSZ4MtdY@ep-snowy-wind-65339777.us-east-2.aws.neon.tech/atividadeAB?sslmode=require');

export default db;
