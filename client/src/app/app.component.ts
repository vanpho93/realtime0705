import { Component } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  admin = { name: 'Teo Nguyen', age: 10 };
  now = new Date();
  value = 1.00010111;
  // txtMessage = '';
  // messages: string[] = [];
  // socket = io('https://realtime0705.herokuapp.com/');

  // constructor() {
  //   this.socket.on('SERVER_SEND_MESSAGE', msg => {
  //     const time = new Date().toLocaleTimeString();
  //     this.messages.push(`${time}: ${msg}`);
  //   });
  // }

  // sendMessage() {
  //   this.socket.emit('CLIENT_SEND_MESSAGE', this.txtMessage);
  //   this.txtMessage = '';
  // }
}
