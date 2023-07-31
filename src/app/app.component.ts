import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList: string[] = ['ir de compras', 'pasear al perro']
  edad: number = 10

  size: number = 200
  inputValue: string = ''
  name: string = '';
  person: string = 'Julian'
  imagen:string = 'https://plus.unsplash.com/premium_photo-1681412205172-8c06ca667689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'

  print(saludo: string) {
    alert(saludo + this.name)
  }

  input(event: Event) {
    const target = event.target as HTMLInputElement
    this.inputValue = target.value
  }

  addToList() {
    this.todoList.push(this.name)
  }

  delete(index: number) {
    this.todoList.splice(index, 1)
  }
}
