import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

     // Usado para um exemplo de ngFor e navegação
     this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'Guia Comercial', component: ListPage, icon: "ios-bookmark-outline" },
      { title: 'Notícias', component: ListPage, icon: "ios-paper-outline" },
      { title: 'Classificados', component: ListPage, icon: "ios-megaphone-outline" },
      { title: 'Eventos', component: ListPage, icon: "ios-calendar-outline" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component, { title: page.title });
  }
}
