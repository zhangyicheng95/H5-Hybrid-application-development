import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import $ from 'jquery';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chat:any;
  name:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.name = navParams.get('name');
      
  }

  ionViewDidLoad() {
  }

  send(){
    $('.chat_list').append('<ion-item class="chat_itemr" padding><img src="assets/imgs/lp.jpg" alt=""><span>' + this.chat +'</span></ion-item><br><br>')
    this.chat = "";
  }

}
