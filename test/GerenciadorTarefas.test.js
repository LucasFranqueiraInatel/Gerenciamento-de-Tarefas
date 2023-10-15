const { expect } = require('chai');
const { Task, TaskManager } = require('../src/taskManager');

describe('Gerenciador de Tarefas', () => {

  it('Deve adicionar uma nova tarefa', () => {
    const taskManager = new TaskManager();
    taskManager.addTask('Comprar mantimentos', 'Leite, ovos, pão', 'Pendente');
    const tasks = taskManager.viewTasks();
    expect(tasks).to.have.lengthOf(1);
    expect(tasks[0]).to.be.an.instanceOf(Task);
    expect(tasks[0].title).to.equal('Comprar mantimentos');
  });

  it('Deve visualizar a lista de tarefas', () => {
    const taskManager = new TaskManager();
    taskManager.addTask('Comprar mantimentos', 'Leite, ovos, pão', 'Pendente');
    taskManager.addTask('Estudar JavaScript', 'Capítulo 5', 'Em progresso');
    const tasks = taskManager.viewTasks();
    expect(tasks).to.have.lengthOf(2);
    expect(tasks[1].description).to.equal('Capítulo 5');
  });

  it('Deve atualizar o status de uma tarefa', () => {
    const taskManager = new TaskManager();
    taskManager.addTask('Comprar mantimentos', 'Leite, ovos, pão', 'Pendente');
    taskManager.updateTaskStatus(0, 'Concluído');
    const tasks = taskManager.viewTasks();
    expect(tasks[0].status).to.equal('Concluído');
  });

  it('Deve excluir uma tarefa', () => {
    const taskManager = new TaskManager();
    taskManager.addTask('Comprar mantimentos', 'Leite, ovos, pão', 'Pendente');
    taskManager.addTask('Estudar JavaScript', 'Capítulo 5', 'Em progresso');
    taskManager.deleteTask(0);
    const tasks = taskManager.viewTasks();
    expect(tasks).to.have.lengthOf(1);
    expect(tasks[0].title).to.equal('Estudar JavaScript');
  });

});
