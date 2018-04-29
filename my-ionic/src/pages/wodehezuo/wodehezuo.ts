import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, ModalController } from 'ionic-angular';
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-wodehezuo',
  templateUrl: 'wodehezuo.html',
})
export class WodehezuoPage {
  items=[1,2,3,4];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad(){
    // 跳到详细页
    $('.info_name').click((e)=>{
      var name = $(e.currentTarget).find('span')[0].innerText;
      var zong = $(e.currentTarget).find('span')[2].innerText;
      var money = $(e.currentTarget).find('span')[4].innerText;
      var diqu = $(e.currentTarget).find('i')[3].innerText;
      var laiyuan = $(e.currentTarget).find('i')[4].innerText;
      var leixing = $(e.currentTarget).find('i')[5].innerText;
      this.navCtrl.push('XiangxiPage',{name:name,
        zong:zong,
        money:money,
        diqu:diqu,
        laiyuan:laiyuan,
        leixing:leixing
      });
    })
    // 合作按钮
    $('.wodehezuo_btn').on('click','button',(e)=>{
      let text = $(e.currentTarget).find('span')[0].innerText === '已合作'?'合作':'已合作'
      $(e.currentTarget).find('span')[0].innerText = text;
    })
  }


}
