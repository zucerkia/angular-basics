import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Task, updateTaskParams } from 'src/app/interfaces/tasks.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnDestroy, OnChanges, OnInit{
  @Input() task: Task = {
    id: 0,
    title: '',
    isCheck: false
  }

  @Output() remove = new EventEmitter<number>()
  @Output() check = new EventEmitter<updateTaskParams>()

  constructor() {
    console.log('1 constructor')
  }
  delete() {
    this.remove.emit(this.task.id)
  }

  checkTask() {
    this.check.emit({
      id: this.task.id,
      check: this.task.isCheck
    })
  }

  ngOnChanges() {
    console.log('2 on change')
  }

  ngOnInit() {
    console.log('3 onInit')
  }

  ngOnDestroy() {
    console.log('4 onDestroy')
  }
}
