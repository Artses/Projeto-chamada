import express from 'express';
import alunoRoutes from './routes/alunoRoutes.js';
import escolaRoutes from "./routes/escolaRoutes.js";
import professorRoutes from "./routes/professorRoutes.js"

const routesAlunos = alunoRoutes;
const routesEscola = escolaRoutes;
const routesProfessor = professorRoutes

const app = express();
app.use(express.json());

//Aluno
app.use('/aluno',routesAlunos);

//Escola
app.use('/escola', routesEscola);

//Professor
app.use('/professor', routesProfessor);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});
