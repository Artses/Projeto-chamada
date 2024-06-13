import { Router } from 'express';
import alunoServices from '../services/alunoServices.js';

const router = Router();

router.get('/', async (req, res) => {
    await alunoServices.lerAlunos(res, req);
});

router.post('/', async (req, res) => {
    await alunoServices.cadastrarAluno(res, req);
});

router.put('/:alunoID', async (req, res) => {
    const id = parseInt(req.params.alunoID);
    await alunoServices.atualizarAluno(res, req, id);
});

router.delete('/:alunoID', async (req, res) => {
    const id = parseInt(req.params.alunoID);
    await alunoServices.deletarAluno(res, req, id);
});

router.patch('/:alunoID', async (req, res) => {
    const id = parseInt(req.params.alunoID);
    await alunoServices.mudarPresenca(res, req, id);
});

export default router;