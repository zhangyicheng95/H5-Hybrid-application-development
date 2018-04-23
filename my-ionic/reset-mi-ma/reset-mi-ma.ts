import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, ModalController, AlertController } from 'ionic-angular';
import { XieyiPage } from '../xieyi/xieyi';
import { Http, Jsonp, Headers } from '@angular/http';
import { Observable } from "rxjs";
import "rxjs/Rx";
import $ from 'jquery'
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-reset-mi-ma',
  templateUrl: 'reset-mi-ma.html',
})
export class ResetMiMaPage {
  timer:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public http: Http,
    public jsonp: Jsonp,
    public alertCtrl: AlertController) {
  }

  goBack(){
    this.viewCtrl.dismiss();
    $('#yanzhengma_span').html("获取验证码");
    $('#yanzhengma_span').removeAttr('disabled');
    clearInterval(this.timer);
  }
  getYZM(){
    var i=60;
    $('#yanzhengma_span').attr('disabled','disabled');
    this.timer = setInterval(function(){
      if(i>0){
        $('#yanzhengma_span').html("获取验证码(" + i + ")")
        i--;
      }else{
        $('#yanzhengma_span').html("获取验证码");
        $('#yanzhengma_span').removeAttr('disabled');
      }
    },1000);
  }
  resetbtn(){
    this.modalCtrl.create(LoginPage).present();
  }

}
