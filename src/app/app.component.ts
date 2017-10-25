import { Component } from '@angular/core';
import { AppLogin } from './app.login';
import { RoomEditorComponent } from './room-editor/room-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login: AppLogin;
  roomEditor: RoomEditorComponent;
 // login[]
// console.log(login['user']);
  title = 'RSM';
}
