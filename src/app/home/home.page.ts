import { Component } from '@angular/core';
// import { Toast } from '@ionic-native/toast/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Badge } from '@ionic-native/badge/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:any;
  constructor(private flashLight: Flashlight, private badge: Badge) {
    this.badge.set(10);
   }

   ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 30000);
  }

   turnOn(){
    this.flashLight.switchOn();
   }

   turnOff(){
    this.flashLight.switchOff();
   }
}
