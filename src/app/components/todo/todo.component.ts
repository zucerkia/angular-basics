import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tasks, TasksApi, updateTaskParams, Task } from 'src/app/interfaces/tasks.interface';
import { TodoService } from 'src/app/services/todo.service';

type Form = {
  title: string
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  form: Form = {
    title: ''
  }

  tasks: Tasks = []

  constructor(private todoService: TodoService, private http:HttpClient) {
    this.tasks = todoService.tasks
  }

  removeTask(id: number) {
    this.todoService.removeTask(id)
    this.tasks = this.todoService.tasks
  }

  addTask() {
    this.tasks = this.todoService.addTask(this.form.title)
  }

  updateTask(updateParams: updateTaskParams) {
    this.tasks = this.todoService.updateTask(updateParams)
  }

  ngOnInit() {
    this.http.get<TasksApi>('https://dummyjson.com/todos').subscribe((data) => {
      this.tasks = data.todos.map(({id, completed, todo}) => ({
        id,
        title: todo,
        isCheck: completed
      }))
      this.todoService.tasks = this.tasks
    } )
  }
}
