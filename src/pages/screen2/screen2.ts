import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-screen2',
  templateUrl: 'screen2.html',
})
export class Screen2Page {

  public item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item = navParams.get('item');

  }


}
