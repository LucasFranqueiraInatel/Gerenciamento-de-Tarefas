const readline = require('readline');
const { Task, TaskManager } = require('./taskManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gerenciadorDeTarefas = new TaskManager();

function menuPrincipal() {
  console.log("\nGerenciador de Tarefas");
  console.log("1. Adicionar Tarefa");
  console.log("2. Visualizar Tarefas");
  console.log("3. Atualizar Status da Tarefa");
  console.log("4. Deletar Tarefa");
  console.log("5. Sair");
  rl.question("\nEscolha uma opção: ", (opcao) => {
    switch(opcao) {
      case '1':
        adicionarTarefa();
        break;
      case '2':
        visualizarTarefas();
        break;
      case '3':
        atualizarStatusDaTarefa();
        break;
      case '4':
        deletarTarefa();
        break;
      case '5':
        console.log("Saindo...");
        rl.close();
        break;
      default:
        console.log("Opção inválida. Por favor, escolha novamente.");
        menuPrincipal();
    }
  });
}

function adicionarTarefa() {
  rl.question("Digite o título da tarefa: ", (titulo) => {
    rl.question("Digite a descrição da tarefa: ", (descricao) => {
      rl.question("Digite o status da tarefa: ", (status) => {
        gerenciadorDeTarefas.addTask(titulo, descricao, status);
        console.log("Tarefa adicionada com sucesso!");
        menuPrincipal();
      });
    });
  });
}

function visualizarTarefas() {
  const tarefas = gerenciadorDeTarefas.viewTasks();
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa encontrada.");
  } else {
    tarefas.forEach((tarefa, index) => {
      console.log(`\nTarefa ${index + 1}:`);
      console.log(`Título: ${tarefa.title}`);
      console.log(`Descrição: ${tarefa.description}`);
      console.log(`Status: ${tarefa.status}`);
    });
  }
  menuPrincipal();
}

function atualizarStatusDaTarefa() {
  rl.question("Digite o índice da tarefa para atualizar (começando de 1): ", (indexStr) => {
    const index = parseInt(indexStr, 10) - 1;
    rl.question("Digite o novo status: ", (status) => {
      gerenciadorDeTarefas.updateTaskStatus(index, status);
      console.log("Status da tarefa atualizado!");
      menuPrincipal();
    });
  });
}

function deletarTarefa() {
  rl.question("Digite o índice da tarefa para deletar (começando de 1): ", (indexStr) => {
    const index = parseInt(indexStr, 10) - 1;
    gerenciadorDeTarefas.deleteTask(index);
    console.log("Tarefa deletada!");
    menuPrincipal();
  });
}

menuPrincipal();
