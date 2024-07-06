import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async cadastrarProfessor(req, res) {
        const professores = await prisma.professor.create({
            data:{
                Nome: req.body.nome,
                Senha: req.body.senha,
                Materia: req.body.materia
            }
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
                idProfessor: id
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
                idProfessor: id 
            },
        });
        res.status(200).json(professores)
    },
    async Logar(req, res) {
        const {nome, senha} = req.body;
        const verificarLogin = await prisma.professor.findMany({
            where:{
                Nome: nome,
                AND:{
                    Senha: senha
                }
            },
        })
        if (verificarLogin != null){
            res.status(200).json(`Logou com o usuario ${nome}`);
        }
        else{
            res.status(200).json(`login ou senha incorreto`);
        }
    }
}