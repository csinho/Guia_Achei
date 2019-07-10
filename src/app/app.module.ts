import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Screen1Page } from '../pages/screen1/screen1';
import { Screen2Page } from '../pages/screen2/screen2';
import { SubcategoriasPage } from '../pages/subcategorias/subcategorias';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Screen1Page,
    Screen2Page,
    SubcategoriasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Screen1Page,
    Screen2Page,
    SubcategoriasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
