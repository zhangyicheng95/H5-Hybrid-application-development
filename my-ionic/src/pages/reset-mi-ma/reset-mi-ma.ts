import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, ModalController, AlertController, App } from 'ionic-angular';
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
  password;
  pwd;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public http: Http,
    public jsonp: Jsonp,
    public alertCtrl: AlertController,
    public app: App) {
  }

  getYZM(){
    var i=60;
    $('#yanzhengma_span').attr('disabled','disabled');
    this.timer = setInterval(function(){
      if(i>0){
        $('#yanzhengma_span').html("(" + i + ")")
        i--;
      }else{
        $('#yanzhengma_span').html("获取验证码");
        $('#yanzhengma_span').removeAttr('disabled');
      }
    },1000);
  }
  ionViewWillLeave() {
    clearInterval(this.timer);
    $('#yanzhengma_span').html("获取验证码");
    $('#yanzhengma_span').removeAttr('disabled');
  }
  resetbtn(){
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }

}
