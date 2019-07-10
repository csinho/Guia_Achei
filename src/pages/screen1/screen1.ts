import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-screen1',
  templateUrl: 'screen1.html',
})
export class Screen1Page {

  public title: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.title = navParams.get('title');
  }



}
