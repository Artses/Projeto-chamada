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

    async atualizarSenha(req, res, id) {
        const updateEscola = await prisma.escola.update(
            {
                where: {
                    idEscola: id,
                },
                data: {
                    Senha: req.body.Senha,
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

    async Logar(req, res) {
        const {email, senha} = req.body;
        const verificarLogin = await prisma.escola.findMany({
            where:{
                Email: email,
                AND:{
                    Senha: senha
                }
            },
        })
        if (verificarLogin != null){
            res.status(200).json(`Logou com o usuario ${email}`);
        }
        else{
            res.status(200).json(`Email ou senha incorreto`);
        }
    }
};