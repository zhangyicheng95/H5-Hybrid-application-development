import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

// todolist
  tolist=[];
  comlist=[];
  data='';
  add(){
    if(this.data !== ""){
      this.tolist.push(this.data);
      this.data='';
    }else{
      // this.data='老铁，不能空着！'
      document.getElementById('inp').setAttribute('placeholder','老铁，不能空着!');
    }
    document.getElementById('inp').focus();
  }
  change(i){
    this.comlist.push(this.tolist[i]);
    this.tolist.splice(i,1);
  }
  del(i){
    this.tolist.splice(i,1);
  }
  change2(i){
    this.tolist.push(this.comlist[i]);
    this.comlist.splice(i,1);
  }
  del2(i){
    this.comlist.splice(i,1);
  }
  delall(){
    this.tolist.length=0;
    this.comlist.length=0;
    document.getElementById('inp').setAttribute('placeholder','');
    document.getElementById('inp').focus();
  }

  // ngSwitch
  fruit:any;
  changeFruit(i){
    this.fruit = i;
  }

  //app-tolist
  arr1=['赵','钱','孙','李'];
  //app-voter
  arr2=['赵四','刘能','广坤'];
  agreed=0;
  disagreed=0;

  getIndex(i : Boolean){
    i ? this.agreed++ : this.disagreed++;
  }
}
