import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModalController, AlertController } from '@ionic/angular';
import { AddArticlePage } from '../add-article/add-article.page';
import { ENV } from '../app.constant';
import { Parse } from 'parse';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  data : Observable <any>;
  articles : any[];

  constructor(private http: HttpClient, 
    private modalController: ModalController,
    private alertController: AlertController) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(){
    this.articles = [];
      this.data.subscribe(result => {
      this.articles = result;
      console.log(this.articles);
    }, err =>{console.log(err)});
  }

async addArticle(){
  const modal = await this.modalController.create({
    component : AddArticlePage,
  });
  return await modal.present();
}

deleteArticle(id){
    this.getArticles()
}

doRefresh(event) {
  this.data.subscribe(result => {
    this.articles = result;
  });
  setTimeout(() => {
    event.target.complete();
  }, 1000);
}

async presentAlert() {
  let alert = await this.alertController.create({
    header: 'Succès!',
    message: 'Article supprimé avec succès...',
    buttons: ['Ok']
  });
  await alert.present();
}

}
