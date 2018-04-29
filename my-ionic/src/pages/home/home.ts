import { Component, NgModule} from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, Modal} from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Platform, ToastController, App, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';
import $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imgSrc:any = "assets/imgs/slides01.png";
  @ViewChild(Slides) slides: Slides;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public statusBar: StatusBar,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    private camera: Camera,
    public toastCtrl: ToastController) { }
// 下拉加载函数
  doRefresh(refresher) {
    let toast = this.toastCtrl.create({
      message: '正在加载',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
    setTimeout(() => {
      refresher.complete();
    }, 3000);
  }
// 上拉加载函数
  items = [1,2,3];
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.items.push( this.items.length+1 );
      }
      infiniteScroll.complete();
      infiniteScroll.enable(false);
    }, 3000);
  }
// 分段器函数
  search="infor";
//轮播图函数 
  go(){
    this.slides.getPreviousIndex;
  }
// 相机
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     if(base64Image !== null){
       this.imgSrc = base64Image;
     }else{
       this.imgSrc = "assets/imgs/slides01.png";
     }
     console.log(base64Image);
    }, (err) => {
     // Handle error
     alert('error');
    });
  }
// 找信息 && 找服务
ionViewDidLoad() {
  $('.ngswitch').on('click','li',(e)=>{
    var name = $(e.target).parents('ul')[0].className == 'infor-ul'?'找信息':'找服务'
    if(name !==""){
      this.navCtrl.push('ZhaoxinxiPage',{name:name});
    }
  })
  // 详细页
  $('.home_item').click((e)=>{
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
}


}
