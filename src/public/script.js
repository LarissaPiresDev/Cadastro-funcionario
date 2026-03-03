const API_URL = 'https://localhost:3000/funcionarios';

//função assincrona para buscar os funcionários 
async function carregarFuncionarios(params) {
    const response = await fetch (API_URL);
    const funcionarios = await response.json();

    const tabela = ducument.getElementById('tabela-funcionarios');
    tabela.innerHTML = '';
//Percorre a lista de funcionários e cria uma linha para cada um na tabela  
    funcionarios.forEach(func =>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${func.id}</td>
            <td>${func.nome}</td>
            <td>${func.cargo}</td>
            <td>${parseFloat(func.salario).toFixed(2)}</td>
            <td>
                <button onclicck="editarFuncionario(${func.id},'${func.nome}', '${func.cargo}', ${func.salario})">Editar</button>
                <button onclick= "excluirFuncionaario(${func.id})">Excluir<button>
            <td>

        `;
        tabela.appendChild(tr);
    })
}

document.getElementById('funcionarioForm').addEventListener('submit', async ()=>{
    e.preventDefault();
    const id = ducument.getElementById('id').value;
    const nome = ducument.getElementById('nome').value;
    const cargo = ducument.getElementById('cargo').value;
    const salario = ducument.getElementById('salario').value;
})