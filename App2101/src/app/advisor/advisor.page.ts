import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.page.html',
  styleUrls: ['./advisor.page.scss'],
})
export class AdvisorPage implements OnInit {

  messages = [
    {
      user:'Taufiq',
      createdAt: 1554090856000,
      msg: 'Hey Whats up mate?'
    },
    {
      user:'Harriss',
      createdAt: 1554090956000,
      msg: 'Heyyo!'
    },
    {
      user:'Nabil',
      createdAt: 1554091056000,
      msg: 'Nah.'
    }
  ];

  currentUser = 'Taufiq';
  newMsg = '';
  @ViewChild(IonContent) content: IonContent;

  constructor() { }

  sendMessage() {
    this.messages.push({
      user: 'Taufiq',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

  ngOnInit() {
  }

}
