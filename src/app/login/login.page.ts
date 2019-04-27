import { Component, OnInit } from '@angular/core';
// import { Socket } from 'ng-socket-io';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  password: string = '';
  username: string = '';

  constructor(private alertCtrl: AlertController,
              private authService: AuthService,
              private modalController: ModalController,
              private loadingController: LoadingController,
              private router : Router) {}

  ngOnInit() {
  }

  async errorFunc(message){
  let alert = await this.alertCtrl.create({
    header : 'warning!',
    message: message,
    buttons: ['OK']
  });
  return await alert.present();
  }

  async home() {
    let loader =  await this.loadingController.create({
      spinner : 'lines',
      message: 'Connexion en cours ...',
      translucent : true
    });
    await loader.present();
    this.router.navigate(['tabs']);
    loader.dismiss();
  }

  async loader(){
    let loader =  await this.loadingController.create({
      spinner : 'lines',
      message: 'Connexion en cours ...',
      translucent : true
    });
    return await loader.present();
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
