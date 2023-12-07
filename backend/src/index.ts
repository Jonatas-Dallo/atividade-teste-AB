import express from "express";
import routes from './routes';
import cors from 'cors'; // Importe o 'cors' desta forma
import dotenv from "dotenv";
import db from "./config/bd_config";
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();
app.use(express.json());

// Configuração do CORS para permitir todas as origens (*), você pode personalizar isso conforme necessário.
app.use(cors());

const transporter = nodemailer.createTransport({
    host : 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'jonatasDallo@hotmail.com',
        pass: '@Poseidom33'
    }
});

app.post('/enviar-email', async (req, res) => {
    const { destinatario, assunto, corpo } = req.body;
  
    try {
      // Enviar e-mail
      await transporter.sendMail({
        from: 'Loja de bicicletas <jonatasDallo@hotmail.com>',
        to: destinatario,
        subject: assunto,
        html: corpo,
      });
  
      res.status(200).json({ mensagem: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).json({ erro: 'Erro ao enviar e-mail' });
    }
  });


db.sync().then(async () => {
    console.log('Banco de dados sincronizado.');

    app.listen(PORT, () => {
        console.log(`Rodando na porta http://40.76.110.239/:${PORT}/`);
    });
}).catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
});

app.use('/', routes);

// Certifique-se de que suas rotas estejam definidas corretamente em 'routes'.
