import { Component } from '@angular/core';
import { AppLogin } from './app.login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  login: AppLogin;
  
 // login[]
  //console.log(login['user']);
  title = 'RSM';
}
