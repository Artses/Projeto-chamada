import { Router } from 'express';
import alunoServices from '../services/alunoServices.js';

const router = Router();

router.get('/', async (req, res) => {
    alunoServices.lerAluno(res,req);
});
router.post('/', async (req, res) => {
    alunoServices.cadastrarAluno(res,req);
})
router.put('/:alunoID', async (req, res) => {
    const id = await parseInt(req.params.alunoID);
    alunoServices.atualizarAluno(res,req,id);
})
router.delete('/:alunoID', async (req, res) => {
    const id = await parseInt(req.params.alunoID);
    alunoServices.deletarAluno(res,req,id);
})
export default router;