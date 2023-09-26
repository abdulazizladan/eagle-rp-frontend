import { Injectable } from '@angular/core';
import { WebSocket } from 'ws';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: WebSocket) {
    this.socket = new WebSocket('ws://localhost:8080');
    this.socket.onopen = () => {
      console.log('Socket connected');
    };
    this.socket.onmessage = (event) => {
      console.log('Message received: ' + event.data);
    };
    this.socket.onclose = () => {
      console.log('Socket disconnected');
    };
  }

  connect() {
    this.socket.OPEN;
  }

  disconnect() {
    this.socket.close();
  }
}
