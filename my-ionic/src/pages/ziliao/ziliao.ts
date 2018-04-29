import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ziliao',
  templateUrl: 'ziliao.html',
})
export class ZiliaoPage {
  username:any;
  birthDay:any;
  Like:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  goBack(){
    let data={username:""}
    if(confirm('放弃编辑？')){
      this.viewCtrl.dismiss(data);
    }
  }

  goMy(){
    let data={username:this.username};
    this.viewCtrl.dismiss(data);
  }

}
