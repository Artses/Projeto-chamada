import express from 'express';
import alunoRoutes from './routes/alunoRoutes.js';
import escolaRoutes from "./routes/escolaRoutes.js";

const routesAlunos = alunoRoutes;
const routesEscola = escolaRoutes;

const app = express();
app.use(express.json());

//Aluno
app.use('/aluno',routesAlunos);

//Escola
app.use('/escola', routesEscola);

app.listen(3000);
