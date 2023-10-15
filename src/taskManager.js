class Task {
    constructor(title, description, status) {
      this.title = title;
      this.description = description;
      this.status = status;
    }
  }
  
  class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(title, description, status) {
      const task = new Task(title, description, status);
      this.tasks.push(task);
    }
  
    viewTasks() {
      return this.tasks;
    }
  
    updateTaskStatus(index, status) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].status = status;
      }
    }
  
    deleteTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks.splice(index, 1);
      }
    }
  }
  
  module.exports = { Task, TaskManager };