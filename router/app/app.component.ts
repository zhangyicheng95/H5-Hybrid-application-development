import { Component ,Optional,Host} from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { GetdataService} from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(@Optional() @Host() public getdata:GetdataService) { }
  index:number;
  ngOnInit(){
    // console.log(localStorage.key);
    for(var i=0;i<10;i++){
      var getKey=localStorage.key(i); 
      // console.log(getKey);
      // console.log(this.getdata.getItem(getKey));
      if(this.getdata.getItem(getKey) !== undefined && getKey.slice(0,2) == 'to'){
        this.tolist.push(this.getdata.getItem(getKey));
      }
    }
      

  }
  tolist=[];
  dolist=[];
  Tolist(e){
    this.dolist.push(e);
    this.getdata.setItem('do'+e,e);
    this.getdata.removeItem('to'+e);
  }
  Dolist(e){
    this.tolist.push(e);
    this.getdata.setItem('to'+e,e);
    this.getdata.removeItem('do'+e);
  }

  // Tolist(e){
  //   this.tolist.push(e);
    
  // }






// tolist
  // tolist=[];
  // comlist=[];
  // data='';
  // add(){
  //   if(this.data !== ""){
  //     this.tolist.push(this.data);
  //     this.data='';
  //   }else{
  //     // this.data='老铁，不能空着！'
  //     document.getElementById('inp').setAttribute('placeholder','老铁，不能空着!');
  //   }
  //   document.getElementById('inp').focus();
  // }
  // change(i){
  //   this.comlist.push(this.tolist[i]);
  //   this.tolist.splice(i,1);
  // }
  // del(i){
  //   this.tolist.splice(i,1);
  // }
  // change2(i){
  //   this.tolist.push(this.comlist[i]);
  //   this.comlist.splice(i,1);
  // }
  // del2(i){
  //   this.comlist.splice(i,1);
  // }
  // delall(){
  //   this.tolist.length=0;
  //   this.comlist.length=0;
  //   document.getElementById('inp').setAttribute('placeholder','');
  //   document.getElementById('inp').focus();
  // }

  // // ngSwitch
  // fruit:any;
  // changeFruit(i){
  //   this.fruit = i;
  // }

  // //app-tolist
  // arr1=['赵','钱','孙','李'];
  // click1(e){
  //   console.log(e.toElement.innerHTML);
  // }
  // //app-voter
  // arr2=['赵四','刘能','广坤'];
  // con:number;
  // getIndex(e){
  //   this.con = e;
  //   console.log(this.con);
  // }
  // click(){
  //   this.arr2[0] = '老七';
  // }
  // agreed=0;
  // disagreed=0;

  // getIndex(i : Boolean){
  //   i ? this.agreed++ : this.disagreed++;
  // }
}
