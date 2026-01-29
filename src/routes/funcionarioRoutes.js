//ROTAS
import express from 'express';
import {
    listarFuncionarios,
    inserirFuncionario
} from '../controller/funcionarioController.js';

const router = express.Router();
router.get('/',listarFuncionarios);
router.post("/",inserirFuncionario);

export default router;

