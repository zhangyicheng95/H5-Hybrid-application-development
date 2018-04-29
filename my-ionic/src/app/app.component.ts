import { Component, Input,Output} from '@angular/core';
import { Platform, ToastController, App, Tabs, NavController, ModalController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import $ from 'jquery';
import { NgLocaleLocalization } from '@angular/common';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'YindaoPage';
  userimg:any = localStorage.getItem('logined') == 'true'?"assets/imgs/lp.jpg":"assets/imgs/my_img.png";
  username:any = localStorage.getItem('logined') == 'true'?"Vip用户":"新用户_15v5";
  btnname:any = localStorage.getItem('logined') == 'true'?'退出登录':"注册登录";
  constructor(
    public platform: Platform,
    public appCtrl: App,
    public toastCtrl: ToastController,
    public statusBar: StatusBar,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController) {
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#fedb47');
        this.platform.ready().then(() => {
          this.registerBackButtonAction(null);
        });
  }

  ionViewDidLoad() {
  }

  //控制硬件返回按钮是否触发，默认false
  backButtonPressed: boolean = false;
  //注册方法
  registerBackButtonAction(tabRef: Tabs): void {
    
    //registerBackButtonAction是系统自带的方法
    this.platform.registerBackButtonAction(() => {
      //获取NavController
      let activeNav: NavController = this.appCtrl.getActiveNavs()[0];
      //如果可以返回上一页，则执行pop
      if (activeNav.canGoBack()) {
        activeNav.pop();
      } else {
        if (tabRef == null) {
          //执行退出
          this.showExit();
        } else {
          //选择首页第一个的标签
          tabRef.select(0);
        }
      }
    });
  }
  //退出应用方法
  showExit() {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
        //第一次按，弹出Toast
        this.toastCtrl.create({
            message: '再按一次退出应用',
            duration: 2000,
            position: 'middle'
        }).present();
      //标记为true
      this.backButtonPressed = true;
      //两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }
  goLogin(){
    if(localStorage.getItem('logined')){
      let out = confirm('确认退出?');
      if(out){
        this.menuCtrl.close();
        this.appCtrl.getRootNavs()[0].setRoot('LoginPage');
      }
    }else{
      this.menuCtrl.close();
      this.appCtrl.getRootNavs()[0].setRoot('LoginPage');
    }
  }

}
