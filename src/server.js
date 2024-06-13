import express from 'express';
import alunoRoutes from './routes/alunoRoutes.js';

const routesAlunos = alunoRoutes;
const app = express();

app.use(express.json());

app.use('/aluno',routesAlunos);


//Escola


//Create
app.post('/escola', async (request, response) => {
    const escola = await prisma.escola.create({
        data: {
            Nome: request.body.Nome,
            Email: request.body.Email,
            Endereco: request.body.Endereco,
            Telefone: request.body.Telefone,
            Senha: request.body.Senha,
            isPublica: request.body.isPublica
        }
    })
    response.status(201).json(escola);
})

//Read
app.get('/escola', async (request, response) => {
    const escola = await prisma.escola.findMany();
    response.status(200).json(escola);
});

//Update
app.put('/escola/:idEscola', async (request, response) => {
    const id = await parseInt(request.params.idEscola);
    const updateEscola = await prisma.escola.update(
        {
            where: {
                idEscola: id,
            },
            data: {
                Nome: request.body.Nome,
                Email: request.body.Email,
                Endereco: request.body.Endereco,
                Telefone: request.body.Telefone,
                Senha: request.body.Senha,
                isPublica: request.body.isPublica
            }
        });
    response.status(201).json(updateEscola);
});

//Delete
app.delete('/escola/:idEscola', async (request, response) => {
    const id = await parseInt(request.params.idEscola);
    const deleteEscola = await prisma.escola.delete({
        where: {
            idEscola: id,
        },
    });
    response.status(202).json(deleteEscola);
});

app.listen(3000);
