import { Router } from 'express';
import professorServices from '../services/professorServices.js';

const router = Router();

router.get('/', async (req, res) =>{
    await professorServices.lerProfessores(res, req);
});

router.post('/', async (req, res) =>{
    await professorServices.cadastrarProfessor(res, req);
});

router.put('/:professorId', async (req, res) =>{
    const id = parseInt(req.params.professorId);
    await professorServices.atualizarProfessor(req, res, id)
});

router.delete('/:professorId', async (req, res) =>{
    const id = parent(req.params.professorId);
    await professorServices.deletarProfessor(req, res, id)
});

router.post('/login', async (res, req) => {
    await professorServices.Logar(res, req);
});
export default router;