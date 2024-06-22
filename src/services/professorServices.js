import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async lerProfessores(res, req) {
        const professor = await prisma.professor.findMany();
        res.status(200).json(professor);
    },

    async cadastrarProfessor(res, req) {
        const professor = await prisma.professor.create({
            data: {
                Nome: req.body.Nome,
                Senha: req.body.Senha,
                Materia: req.body.Materia
            }
        })
        res.status(201).json(professor);
    },

    async atualizarProfessor(res, req, id) {
        const professor = await prisma.professor.update(
            {
                where: {
                    professorId: id,
                },
                data: {
                    Nome: req.body.Nome,
                    Senha: req.body.Senha,
                    Materia: req.body.Materia
                }
            });
        res.status(201).json(professor);
    },

    async deletarProfessor(res, req, id) {
        const deleteProfessor = await prisma.professor.delete({
            where: {
                professorId: id,
            },
        });
        res.status(202).json(deleteProfessor);
    },
};