import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http,Jsonp,Headers } from "@angular/http";  
import { Observable } from "rxjs";
import "rxjs/Rx";
import { Platform, ToastController, App, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  username;
  password;
  logined:any=true;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public http:Http, 
    public jsonp:Jsonp, 
    public alertCtrl: AlertController, 
    public modalCtrl: ModalController, 
    public viewCtrl:ViewController,
    public app:App) { }
    
  ionViewDidLoad() {
  }
  
  Login() {
    this.app.getRootNavs()[0].setRoot(TabsPage);
    localStorage.setItem('logined','true');

    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID='+this.username+'&password='+this.password,JSON.stringify({}), {headers:this.headers} ).filter(data=>{
      // console.log(data)
      return data.status === 0;
    }).map(data=>{
      //map 订阅，将data转变为json格式，filter进行判断，若值为true继续进行，若值为false截断
      alert('map');
      return data.json();
    }).subscribe( data=>{
      if(data ==0){
          let alert0 = this.alertCtrl.create({
            title: '登录失败',
            subTitle: '账号不存在',
            buttons: ['重新输入']
          });
          alert0.present();
      }else if(data == 2){
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
      }else if(this.username == data['userID'] && this.username !== "" && this.username !== undefined){
        localStorage.setItem('logined','true');
        this.app.getRootNavs()[0].setRoot(TabsPage);
      }
      } );
  }

  // 注册
  signup(){
    this.navCtrl.push('SignUpPage');
  }
  // 忘记密码
  reset(){
    this.navCtrl.push('ResetMiMaPage');
  }
  
}
