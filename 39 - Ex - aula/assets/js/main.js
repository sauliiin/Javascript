const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const liii = criaLi();
    liii.innerText = textoInput;
    tarefas.appendChild(liii);
    limpaInput();
    criaBotaoApagar(liii);
    salvarTarefas();
}

function limpaInput() {    // função para limpar o valor do input.
    inputTarefa.value = '';
    inputTarefa.focus();  // focus tb é um evento html. Representa quando está focado em um campo
}

function criaBotaoApagar(li) {   // recebe li para saber onde vai adicionar este botão
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa.')
    li.appendChild(botaoApagar);  
}

inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.keyCode === 13) {    // Keypress para pressionamento de tecla e keyCode 13 para ENTER. Se pressiona ENTER cria tarefa 
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click', function() { //Como no 2º parâmetro é obrigatório uma função, coloco uma função anônima. 
    if (!inputTarefa.value) return; // Para não preencher quando for apenas espaço em branco. Isso é o mesmo que: if (inputTarefa.value === ''). Como a gente sabe que esse valor é falso, usamos (!inputTarefa.value).
    criaTarefa(inputTarefa.value);
  });

document.addEventListener('click', function(evento) { //Eu preciso de um evento pq quero saber onde no documento está sendo clicado.
    const elemento = evento.target;
    if (elemento.classList.contains('apagar')) {
    elemento.parentElement.remove(); // parent pq eu quero remover o elemento pai do elemento clicado    
    salvarTarefas();
    }
});  
 
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // trim remove espaços sobrando
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas();