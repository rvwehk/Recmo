import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  password: string = '';
  username: string = '';
  verify: string = '';
  email: string = '';

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

  public register() {

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
