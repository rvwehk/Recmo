import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Parse } from 'parse';
import { ENV } from '../app.constant';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {
  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;
  private username;
  private password;

  constructor(private router : Router, private loadingController:LoadingController, private authService:AuthService) { 
    this.parseInitialize();
    console.log('Initiated Auth');
  }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl('/login');
  }

  register(){
    this.router.navigateByUrl('/register');
  }

  async home() {

    let loader =  await this.loadingController.create({
      spinner : 'lines',
      message: 'Connexion en cours ...',
      translucent : true
    });
    await loader.present();
    // Parse.User.logIn(this.username, this.password)
    // .then((success)=>{
    //   this.router.navigate(['tabs']);
    //   loader.dismiss();
    //   console.log(success);
    // })
    // .catch((err)=>{
    //   loader.dismiss();
    //   console.log(err);
    // })
    this.authService.login(this.username, this.password)
    .subscribe( (res)=>{
      console.log(res);
    })
  }

  private parseInitialize() {
    Parse.initialize(this.parseAppId);
    Parse.serverURL = this.parseServerUrl;
  }
}
