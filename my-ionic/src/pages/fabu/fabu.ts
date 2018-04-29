import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-fabu',
  templateUrl: 'fabu.html',
})
export class FabuPage {

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {}

    ionViewDidLoad() {
      $('.fabu_col').click((e)=>{
        var type = $(e.currentTarget)[0].innerText;
        this.navCtrl.push('Fabu2Page',{type:type});
      })
    }

}
