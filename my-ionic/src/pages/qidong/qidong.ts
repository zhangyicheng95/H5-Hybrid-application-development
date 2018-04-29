import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';
import $ from 'jquery';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-qidong',
  templateUrl: 'qidong.html',
})
export class QidongPage {
  timer:any;
  clicked:any=false;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public app: App) {
      
  }
  ionViewDidEnter() { 
    var i=5;
      this.timer = setInterval(()=>{
        if(i>0){
          $('.tiaoguo').html("跳过("+i+")")
          i--;
        }else{
          clearInterval(this.timer);
          this.app.getRootNavs()[0].setRoot(TabsPage);
        }
      },1000);
      $(".tiaoguo").click(()=>{
        clearInterval(this.timer);
        this.app.getRootNavs()[0].setRoot(TabsPage);
      })
  }


}
