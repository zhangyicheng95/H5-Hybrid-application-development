import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ZiliaoPage } from '../ziliao/ziliao';
import { LoginPage } from '../login/login';
import { ShezhiPage } from '../shezhi/shezhi';
import { YabiPage } from '../yabi/yabi';
import { WodefabuPage } from '../wodefabu/wodefabu';
import { WodehezuoPage } from '../wodehezuo/wodehezuo';
import { WodeshoucangPage } from '../wodeshoucang/wodeshoucang';
import { WodecaogaoPage } from '../wodecaogao/wodecaogao';
import { ShipinfabuPage } from '../shipinfabu/shipinfabu';
import { WanshanxinxiPage } from '../wanshanxinxi/wanshanxinxi';
import { ViPdengjiPage } from '../vi-pdengji/vi-pdengji';
import { ZhanghuanquanPage } from '../zhanghuanquan/zhanghuanquan';
import { BangzhuPage } from '../bangzhu/bangzhu';
@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {

  constructor(public navCtrl: NavController, 
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) { }
  function(){
    this.modalCtrl.create(YabiPage).onDidDismiss(data=>{
      console.log(data);
    })
  }
  Login(){
    this.navCtrl.push(LoginPage);
  }
  bianji(){
    this.modalCtrl.create(ZiliaoPage).present();
  }
  yabi(){
    this.modalCtrl.create(YabiPage,{ userId: 8675309 }).present();
  }
  wodefabu(){
    this.modalCtrl.create(WodefabuPage).present();
  }
  wodehezuo(){
    this.modalCtrl.create(WodehezuoPage).present();
  }
  wodeshoucang(){
    this.modalCtrl.create(WodeshoucangPage).present();
  }
  caogao(){
    this.modalCtrl.create(WodecaogaoPage).present();
  }
  shipinfabu(){
    this.modalCtrl.create(ShipinfabuPage).present();
  }
  wanshanxinxi(){
    this.modalCtrl.create(WanshanxinxiPage).present();
  }
  VIPdengji(){
    this.modalCtrl.create(ViPdengjiPage).present();
  }
  anquan(){
    this.modalCtrl.create(ZhanghuanquanPage).present();
  }
  bangzhu(){
    this.modalCtrl.create(BangzhuPage).present();
  }
  shezhi(){
    this.modalCtrl.create(ShezhiPage).present();
  }

}
