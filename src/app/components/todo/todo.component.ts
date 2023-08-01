import { Component } from '@angular/core';
import { Task, Tasks } from 'src/app/interfaces/tasks.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  title: string = ''
  tasks: Tasks = [
    {id: 1, title: 'Dar la clase de hoy', isCheck: false},
    {id: 2, title: 'Hacer la compra', isCheck: true},
    {id: 3, title: 'Hacer la tarea', isCheck: true}
  ]

  removeTask(id: number) {
    const newTasks = this.tasks.filter((task) => task.id !== id)
    this.tasks = newTasks
  }

  addTask() {
    const newTask: Task = {
      id: new Date().getTime(),
      title: this.title,
      isCheck: false
    }

    this.tasks.push(newTask)
  }
}
