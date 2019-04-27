import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Toast } from '@ionic-native/toast/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { Badge } from '@ionic-native/badge/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AddArticlePage } from './add-article/add-article.page';
import { RegisterPage } from './register/register.page';

@NgModule({
  declarations: [AppComponent, AddArticlePage, RegisterPage],
  entryComponents: [AddArticlePage, RegisterPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Toast,
    Flashlight,
    LocalNotifications,
    AndroidFingerprintAuth,
    Badge,
    Camera,
    FingerprintAIO,
    HTTP,
    NativeStorage,
    Contacts
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
