import { Component, NgModule} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import $ from 'jquery';

/**
 * Generated class for the MsgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-msg',
  templateUrl: 'msg.html',
})
export class MsgPage {
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }
  
  ionViewDidLoad() {
    $('.msg_item').click((e)=>{
      var name = $(e.currentTarget)[0].innerText;
      this.navCtrl.push('ChatPage',{name:name});
    })
  }
  

  

}
