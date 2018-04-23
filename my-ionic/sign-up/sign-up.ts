import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, ModalController, AlertController } from 'ionic-angular';
import { XieyiPage } from '../xieyi/xieyi';
import { Http, Jsonp, Headers } from '@angular/http';
import { Observable } from "rxjs";
import "rxjs/Rx";
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  username;
  password;
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
  goXieYi(){
    this.modalCtrl.create(XieyiPage).present();
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
  signup(){
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',JSON.stringify({
      status:'register',
      userID:this.username,
      password:this.password
    }), {headers:this.headers} ).filter(data=>{
      return data.status === 200;
    }).map(data=>{
      //map 订阅，将data转变为json格式，filter进行判断，若值为true继续进行，若值为false截断
      return data.json();
    }).subscribe( data=>{
      switch(data){
        case '0':
          let alert0 = this.alertCtrl.create({
            title: '注册失败',
            subTitle: '改号码已被注册',
            buttons: ['重新输入']
          });
          alert0.present();
          break;
        case '1':
        let alert1 = this.alertCtrl.create({
          title: '注册成功',
          subTitle: '请返回登录',
          buttons: ['确定']
        });
        alert1.present();
        break;
      }
    });
  }

}
