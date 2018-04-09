import { Component, NgModule} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { LoginPage } from '../login/login';
import { HelloPage } from '../hello/hello';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
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
      document.getElementById('refersher').style.paddingLeft='none';
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
    document.getElementById('refersher').style.display = 'block';
    document.getElementById('refersher').innerHTML = '努力加载中！';
    var timer = setInterval(()=>{
      if(document.getElementById('refersher').innerHTML.lastIndexOf('.')<9){
        document.getElementById('refersher').innerHTML += '.';
      }else{
        document.getElementById('refersher').innerHTML = '努力加载中！';
      }
    },200);
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.items.push( this.items.length+1 );
      }

      clearInterval(timer);
      document.getElementById('refersher').style.paddingLeft='none';
      document.getElementById('refersher').style.textAlign='center';
      document.getElementById('refersher').innerHTML = '加载完成！';
      infiniteScroll.complete();
      infiniteScroll.enable(false);
    }, 3000);
    setTimeout(() => {
      document.getElementById('refersher').style.display = 'none';
    }, 4500);
  }
// 分段器函数
  search="infor";
//轮播图函数 
  go(){
    this.slides.getPreviousIndex;
  }

}
