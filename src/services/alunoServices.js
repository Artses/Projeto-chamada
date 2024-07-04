import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async lerAlunos(res, req) {
        const alunos = await prisma.aluno.findMany();
        res.status(200).json(alunos);
    },

    async cadastrarAluno(res, req) {
        const aluno = await prisma.aluno.create({
            data: {
                nome: req.body.nome,
                presenca: req.body.presenca
            }
        })
        res.status(201).json(aluno);
    },

    async atualizarAluno(res, req, id) {
        const updateAluno = await prisma.aluno.update(
            {
                where: {
                    id: id,
                },
                data: {
                    nome: req.body.nome,
                    presenca: req.body.presenca
                }
            });
        res.status(201).json(updateAluno);
    },

    async deletarAluno(res, req, id) {
        const deleteAluno = await prisma.aluno.delete({
            where: {
                id: id,
            },
        });
        res.status(202).json(deleteAluno);
    },

    async mudarPresenca(res, req, id) {
        const alterarStatus = await prisma.aluno.update({
            where: {
                id: id,
            },
            data: {
                presenca: req.body.presenca
            }
        });
        res.status(201).json(alterarStatus);
    }
};