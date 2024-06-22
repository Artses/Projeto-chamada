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
    await professorServices.atualizarProfessor(res, req, id)
});

router.delete('/:professorId', async (req, res) =>{
    const id = parseInt(req.params.professorId);
    await professorServices.deletarProfessor(res, req, id)
});
export default router;