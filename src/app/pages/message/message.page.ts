import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  messages: any = [];
  message = '';

  constructor() { }
  sendMessages() {
    let message = {
      message: this.message
    }
      this.messages.push(message);
      this.clearField();
    }
  

  clearField() {
    this.message='';
  }

  ngOnInit() {
  }

}
