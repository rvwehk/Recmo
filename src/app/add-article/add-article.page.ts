import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.page.html',
  styleUrls: ['./add-article.page.scss'],
})
export class AddArticlePage implements OnInit {
  nom : string;
  prix : string;
  remise : string;
  stock : string;

  constructor(private http : HTTP,
    private alertController: AlertController,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  addArticle(){
    this.presentAlert();
    this.closeModal();
  }

  async presentAlert() {
    let alert = await this.alertController.create({
      header: 'Ajout effectué avec succès!',
      message: 'Nom: '+this.nom +', Prix: ' +this.prix+ ', Stock: ' +this.stock,
      buttons: ['Ok']
    });
    return await alert.present();
  }

  async closeModal(){
    await this.modalController.dismiss();
  }
}
