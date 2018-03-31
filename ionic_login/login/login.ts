import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http,Jsonp,Headers } from "@angular/http";  
import { Observable } from "rxjs";
import "rxjs/Rx";
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http,public jsonp:Jsonp,public alertCtrl: AlertController) { }
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  username;
  password;
  ionViewDidLoad() {
  }
  
  presentConfirm() {
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',JSON.stringify({
      status:'login',
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
            title: '登录失败',
            subTitle: '账号不存在',
            buttons: ['重新输入']
          });
          alert0.present();
          break;
        case 2:
          let alert2 = this.alertCtrl.create({
            title: '登录失败',
            message: '密码错误',
            buttons: [
              {
                text: '重新输入',
                // role: '重新输入',
                handler: () => {
                  console.log('重新输入');
                }
              },
              {
                text: '修改密码',
                handler: () => {
                  console.log('修改密码');
                }
              }
            ]
          });
          alert2.present();
          break;
      }
      if(this.username == data['userID'] && this.username !== ""){
        this.navCtrl.push(TabsPage);
      }
    } );
  }

}
