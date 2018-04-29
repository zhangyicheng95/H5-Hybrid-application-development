import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {
  username:any='新用户1_475';
  userimg:any="assets/imgs/my_img.png";
  constructor(public navCtrl: NavController, 
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) { }
  bianji(){
    let ZL = this.modalCtrl.create('ZiliaoPage');
    ZL.onDidDismiss((data) => {
      if(data.username){
        this.username = data.username;
      }
    });
    ZL.present();
  }
  yabi(){
    this.navCtrl.push('YabiPage',{ userId: 8675309 });
  }
  wodefabu(){
    this.navCtrl.push('WodefabuPage');
  }
  wodehezuo(){
    this.navCtrl.push('WodehezuoPage');
  }
  wodeshoucang(){
    this.navCtrl.push('WodeshoucangPage');
  }
  caogao(){
    this.navCtrl.push('WodecaogaoPage');
  }
  shipinfabu(){
    this.navCtrl.push('ShipinfabuPage');
  }
  wanshanxinxi(){
    this.navCtrl.push('WanshanxinxiPage');
  }
  VIPdengji(){
    this.navCtrl.push('ViPdengjiPage');
  }
  anquan(){
    this.navCtrl.push('ZhanghuanquanPage');
  }
  bangzhu(){
    this.navCtrl.push('BangzhuPage');
  }
  shezhi(){
    this.navCtrl.push('ShezhiPage');
  }

}
