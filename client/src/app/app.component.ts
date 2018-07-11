import { Component } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  txtMessage = '';
  messages: string[] = [];
  socket = io('https://realtime0705.herokuapp.com/');

  constructor() {
    this.socket.on('SERVER_SEND_MESSAGE', msg => {
      this.messages.push(`${new Date().toLocaleTimeString()}: ${msg}`);
    });
  }

  sendMessage() {
    this.socket.emit('CLIENT_SEND_MESSAGE', this.txtMessage);
    this.txtMessage = '';
  }
}
