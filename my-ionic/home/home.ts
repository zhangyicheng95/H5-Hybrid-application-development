import { Component, NgModule} from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, Modal} from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Platform, ToastController, App, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ZhaoxinxiPage } from '../zhaoxinxi/zhaoxinxi';
import $ from 'jquery';
import { XiangxiPage } from '../xiangxi/xiangxi';

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
    private camera: Camera) { }
// 下拉加载函数
  doRefresh(refresher) {
    document.getElementById('refersher').style.display = 'block';
    document.getElementById('refersher').innerHTML = '努力加载中！';
    var timer = setInterval(()=>{
      if(document.getElementById('refersher').innerHTML.lastIndexOf('.')<9){
        document.getElementById('refersher').innerHTML += '.';
      }else{
        document.getElementById('refersher').innerHTML = '努力加载中！';
      }
    },300);
    setTimeout(() => {
      clearInterval(timer);
      document.getElementById('refersher').style.textAlign='center';
      document.getElementById('refersher').innerHTML = '加载完成！';
      refresher.complete();
    }, 3000);
    setTimeout(() => {
      document.getElementById('refersher').style.display = 'none';
    }, 4500);
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
  $('.search-ul').find('li').click((e)=>{
    var name = $(e.currentTarget)[0].innerText;
    if(name !==""){
      this.modalCtrl.create(ZhaoxinxiPage,{name:name}).present();
    }
  })
  $('.home_item').click((e)=>{
    var name = $(e.currentTarget).find('span')[0].innerText;
    this.modalCtrl.create(XiangxiPage,{name:name}).present();
  })
}


}
