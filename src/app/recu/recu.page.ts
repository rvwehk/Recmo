import { Component, OnInit } from '@angular/core';
import { Parse } from 'parse';
// import { ENV } from '../app.constant';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
})
export class RecuPage implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  // private parseAppId: string = ENV.parseAppId;
  // private parseServerUrl: string = ENV.parseServerUrl;

  constructor() { 
    // this.parseInitialize();
  }

  ngOnInit() {
    // let Recu = new Parse.Object.extend('Recu');
    // let recu = new Recu();
    // recu.set('numero', 'recmo001');
    // recu.save();
  }

  private parseInitialize() {
    // Parse.initialize(this.parseAppId);
    // Parse.serverURL = this.parseServerUrl;
  }

}
