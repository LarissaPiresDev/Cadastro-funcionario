import db from '../config/db.js';

//READ
export const listarFuncionarios = (req, res)=>{
    db.query('SELECT * FROM funcionarios', (err, results)=>{
        if (err) return res.status(500).json({erro: 'Erro ao buscar funcionários :/'});
        res.json(results);
    });
}

//CREATE
export const inserirFuncionario = (req, res)=>{
    const slq = "INSERIR INTO funcionarios (nome, cargo, salario) VALUES (?,?,?)";
    db.query(slq, [nome, cargo, salario], err =>{
        if(err) return res.satus(500).json({erro: 'Erro ao inserir funcionário :/'});
        res.json({mensagem: 'Funcionário inserido com sucesso! '});
    })
}