import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 print(value: string) {
  console.log(value)
 }
}
