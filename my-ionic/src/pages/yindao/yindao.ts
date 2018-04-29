import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import $ from 'jquery';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-yindao',
  templateUrl: 'yindao.html',
})
export class YindaoPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App) {
    }
    
    ionViewDidLoad() { 
      if(localStorage.getItem('signed')){
        this.app.getRootNavs()[0].setRoot('QidongPage');
      }else{
        localStorage.setItem('signed','true');
      }
      // $('.qidong_slides').find('ion-slide:last-child').click(()=>{
      //   this.app.getRootNavs()[0].setRoot(TabsPage);
      // })
  }

  start(){
    this.app.getRootNavs()[0].setRoot(TabsPage);
  }
}
