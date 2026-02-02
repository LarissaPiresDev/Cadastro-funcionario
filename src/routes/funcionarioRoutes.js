//ROTAS

import express from 'express';
import {
    listarFuncionarios,
    inserirFuncionario,
    atualizarFuncionario
} from '../controller/funcionarioController.js';

const router = express.Router();
router.get('/', listarFuncionarios);
router.post("/", inserirFuncionario);
router.put('/:id', atualizarFuncionario);

export default router;

