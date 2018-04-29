import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, ModalController, AlertController } from 'ionic-angular';
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
  pwd;
  timer:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public http: Http,
    public jsonp: Jsonp,
    public alertCtrl: AlertController) {
  }

  goXieYi(){
    this.navCtrl.push('XieyiPage');
  }
  getYZM(){
    var i=60;
    $('#yanzhengma_span1').attr('disabled','disabled');
    this.timer = setInterval(function(){
      if(i>0){
        $('#yanzhengma_span1').html("(" + i + ")")
        i--;
      }else{
        $('#yanzhengma_span1').html("获取验证码");
        $('#yanzhengma_span1').removeAttr('disabled');
      }
    },1000);
  }
  // 离开这个页面触发
  ionViewWillLeave() {
    clearInterval(this.timer);
    $('#yanzhengma_span1').html("获取验证码");
    $('#yanzhengma_span1').removeAttr('disabled');
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
        case 0:
          let alert0 = this.alertCtrl.create({
            title: '注册失败',
            subTitle: '改号码已被注册',
            buttons: ['重新输入']
          });
          alert0.present();
          break;
        case 1:
        let alert1 = this.alertCtrl.create({
          title: '注册成功',
          subTitle: '请返回登录',
          buttons: ['确定']
        });
        alert1.present();
        break;
      }
      if(this.password !== this.pwd){
        let alert2 = this.alertCtrl.create({
          title: '注册失败',
          subTitle: '两次密码不一致',
          buttons: ['重新输入']
        });
        alert2.present();
      }
    });
  }

}
