import { Injectable } from '@angular/core';
import { Tasks, Task, updateTaskParams, TasksApi } from '../interfaces/tasks.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasks: Tasks = []

  constructor(private http: HttpClient) { }

  removeTask(id: number) {
    const newTasks = this.tasks.filter((task) => task.id !== id)
    this.tasks = newTasks
    return this.tasks
  }

  addTask(title: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      title,
      isCheck: false
    }

    this.tasks.push(newTask)
    return this.tasks
  }

  updateTask(updateParams: updateTaskParams) {
    const index = this.tasks.findIndex((task) => task.id ===  updateParams.id)
    this.tasks[index].isCheck = updateParams.check
    return this.tasks
  }
}
