import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bangzhu',
  templateUrl: 'bangzhu.html',
})
export class BangzhuPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtr: ViewController) {
  }

  goBack(){
    this.navCtrl.pop();;
  }

}
