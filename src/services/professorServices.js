import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async cadastrarProfessor(req, res) {
        const professores = await prisma.professor.create({
            Nome: req.body.nome,
            Senha: req.body.senha,
            Materia: req.body.materia
        });
        res.status(200).json(professores);
    },

    async lerProfessores(req, res) {
        const professor = await prisma.professor.findMany();
        res.status(200).json(professor);
    },

    async atualizarProfessor(req, res, id) {
        const professores = await prisma.professor.update({
            where: {
                professorId: id
            },
            data: {  
                Nome: req.body.nome,   
                Senha: req.body.senha,      
                Materia: req.body.materia
            }
        });
        res.status(202).json(professores);
    },
    async deletarProfessor(req, res, id){
        const professores = await prisma.professor.delete({
            where:{
                professorId: id 
            },
        });
        res.status(200).json(professores)
    }
}