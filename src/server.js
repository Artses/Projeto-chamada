import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { readFile } from 'fs/promises';
const swaggerDocument = JSON.parse(
    await readFile(new URL('./config/swagger_autogen.json', import.meta.url))
);

const app = express();
app.use(express.json());

//Aluno
app.use('/aluno', alunoRoutes);

//Escola
app.use('/escola', escolaRoutes);

//Professor
app.use('/professor', professorRoutes);

app.use('/Swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});
