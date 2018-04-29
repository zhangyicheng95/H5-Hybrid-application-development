import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the YabiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yabi',
  templateUrl: 'yabi.html',
})
export class YabiPage {

  constructor(public navCtrl: NavController, 
    public params: NavParams,
    public viewCtrl: ViewController) {
      console.log('UserId', params.get('userId'));
  }


}
