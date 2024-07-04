import { Router } from 'express';
import escolaServices from "../services/escolaServices.js";

const router = Router();

router.get('/', async(req, res) =>{
    await escolaServices.lerEscolas(req, res);
});

router.post('/', async(req, res) =>{
    await escolaServices.cadastrarEscola(req, res);
});

router.put('/:idEscola', async (req, res) => {
    const id = parseInt(req.params.idEscola);
    await escolaServices.atualizarEscola(req, res, id);
});

router.delete('/:idEscola', async (req, res) => {
    const id = parseInt(req.params.idEscola);
    await escolaServices.deletarEscola(req, res, id)
});

router.post('/login', async (res, req) => {
    await escolaServices.Logar(res, req);
});
export default router;