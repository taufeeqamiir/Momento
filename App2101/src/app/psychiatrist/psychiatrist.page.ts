import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-psychiatrist',
  templateUrl: './psychiatrist.page.html',
  styleUrls: ['./psychiatrist.page.scss'],
})
export class PsychiatristPage implements OnInit {

  phoneNumber: number;

  constructor(private call: CallNumber) { }

  async callNumber():Promise<any>{
    try{
      await this.call.callNumber(String(this.phoneNumber), true);
    }
    catch(e){
      console.error(e);
    }
  }

  ngOnInit() {
  }

}
