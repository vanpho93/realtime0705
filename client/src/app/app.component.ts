import { Component } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  txtMessage = '';
  socket = io('https://realtime0705.herokuapp.com/');

  constructor() {
    this.socket.on('SERVER_SEND_MESSAGE', msg => console.log(msg));
  }

  sendMessage() {
    this.socket.emit('CLIENT_SEND_MESSAGE', this.txtMessage);
    this.txtMessage = '';
  }
}
