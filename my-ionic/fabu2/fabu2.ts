import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DiquPage } from '../diqu/diqu';

/**
 * Generated class for the Fabu2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fabu2',
  templateUrl: 'fabu2.html',
})
export class Fabu2Page {
  type:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController ) {
      this.type = this.navParams.get('type');
      console.log(this.type);
    }

  goBack(){
    this.viewCtrl.dismiss();
  }
  checkDiqu(){
    this.modalCtrl.create(DiquPage).present();
  }
  fabu_img(){
    
  }

}
