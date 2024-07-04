import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async cadastrarEscola(req, res) {
        const escola = await prisma.escola.create({
            data: {
                Nome: req.body.Nome,
                Email: req.body.Email,
                Endereco: req.body.Endereco,
                Telefone: req.body.Telefone,
                Senha: req.body.Senha,
                isPublica: req.body.isPublica
            }
        })
        res.status(201).json(escola);
    },

    async lerEscolas(req, res) {
        const escola = await prisma.escola.findMany();
        res.status(200).json(escola);
    },

    async atualizarEscola(req, res, id) {
        const updateEscola = await prisma.escola.update(
            {
                where: {
                    idEscola: id,
                },
                data: {
                    Nome: req.body.Nome,
                    Email: req.body.Email,
                    Endereco: req.body.Endereco,
                    Telefone: req.body.Telefone,
                    Senha: req.body.Senha,
                    isPublica: req.body.isPublica
                }
            });
        res.status(201).json(updateEscola);
    },

    async deletarEscola(req, res, id) {
        const deleteEscola = await prisma.escola.delete({
            where: {
                idEscola: id,
            },
        });
        res.status(202).json(deleteEscola);
    },

    async Logar(res, req) {
        const verificarLogin = await prisma.escola.findMany({
            where:{
                Email: req.body.email,
                and:{
                    Senha: req.body.senha
                }
            },
        })
        if (verificarLogin != null){
            res.status(200).console.log(`Logou com o usuario ${email}`);
        }
        else{
            res.status(200).console.log(`Email ou senha incorreto`);
        }
    }
};