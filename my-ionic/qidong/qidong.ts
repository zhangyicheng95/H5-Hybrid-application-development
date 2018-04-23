import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-qidong',
  templateUrl: 'qidong.html',
})
export class QidongPage {
  timer:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) {
      
  }
  ionViewDidEnter() { 
    var i=5;
      this.timer = setInterval(()=>{
        if(i>0){
          $('.tiaoguo').html("跳过("+i+")")
          i--;
        }else{
          clearInterval(this.timer);
          this.modalCtrl.create(LoginPage).present();
        }
      },1000);
  }

  tiaoguo(){
    alert(1);
    clearInterval(this.timer);
    this.modalCtrl.create(LoginPage).present();
  }

}
