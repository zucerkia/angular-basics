import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/tasks.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task = {
    id: 0,
    title: '',
    isCheck: false
  }

  @Output() remove = new EventEmitter<number>()

  delete() {
    this.remove.emit(this.task.id)
  }
}
