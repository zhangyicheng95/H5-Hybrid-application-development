import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-xiangxi',
  templateUrl: 'xiangxi.html',
})
export class XiangxiPage {
  clicked = false;
  name:any;
  zong:any;
  money:any;
  diqu:any;
  laiyuan:any;
  leixing:any;
  timer:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.name = this.navParams.get('name');
      this.zong = this.navParams.get('zong');
      this.money = this.navParams.get('money');
      this.diqu = this.navParams.get('diqu');
      this.laiyuan = this.navParams.get('laiyuan');
      this.leixing = this.navParams.get('leixing');
  }

  ionViewDidLoad() {
    // 自动轮播图
    let box = document.getElementById('picScroll');
		let box1 = document.getElementById('picScroll1');
    let box2 = document.getElementById('picScroll2');
    let right = document.getElementById('arrow_right');
    let left = document.getElementById('arrow_left');
    box2.innerHTML = box1.innerHTML;
		function changeToLeft(){
			if(box.scrollLeft - box2.offsetWidth >= 0){
				box.scrollLeft -= box1.offsetWidth;
			}
			else{
				box.scrollLeft++;
			}
    }
    function changeToRight(){
			if(box.scrollLeft - box1.offsetWidth <= 0){
				box.scrollLeft += box2.offsetWidth;
			}
			else{
				box.scrollLeft--;
			}
		}
		this.timer = setInterval(changeToLeft,50);
		right.onclick = ()=>{
      clearInterval(this.timer);
			this.timer = setInterval(changeToLeft,50);
    }
		left.onclick = ()=>{
			clearInterval(this.timer);
			this.timer = setInterval(changeToRight,50);
		}
  }
  shoucang(){
    if(!this.clicked){
      $(".xiangxi_img")[0].setAttribute('src',"assets/imgs/star.png");
      this.clicked = !this.clicked;
    }else{
      $(".xiangxi_img")[0].setAttribute('src',"assets/imgs/starEmpty.png");
      this.clicked = !this.clicked;
    }
  }

}
