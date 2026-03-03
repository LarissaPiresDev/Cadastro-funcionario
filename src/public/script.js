const API_URL = 'https://localhost:3000/funcionarios';

//função assincrona para buscar os funcionários 
async function carregarFuncionarios(params) {
    const response = await fetch (API_URL);
    const funcionarios = await response.json();

    const tabela = document.getElementById('tabela-funcionarios');
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
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const salario = document.getElementById('salario').value;

    //tratamento de dados para criar um objeto funcionario com os dados do formulário
    const funcionario = { nome, cargo, salario};
    if(id){
        await fetch(`${API_URL}/%{id}`, {
            method:'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(funcionario)
        });
    //se o id existir ele atualiza
    }else{
        await fetch(API_URL, {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(funcionario)
        });
    }
    //limpa o formulário 
    e.target.reset();
    document.getElementById('id').value = '';
    
})

//função para editar funcionario
function editarFuncionario(id, nome, cargo, salario){
    document.getElementById('id').value = id;
    document.getElementById('nome').value = nome;
    document.getElementById('cargo').value = cargo;
    document.getElementById('salario').value = salario;
}

//função para excluir funcionario
async function excluirFuncionario(id){
    if(confirm('Tem certeza que deseja excluir este funcionário?')){
        await fetch(`${API_URL}/${id}`,{method:'DELETE'});
        carregarFuncionarios();
    }
}
carregarFuncionarios();