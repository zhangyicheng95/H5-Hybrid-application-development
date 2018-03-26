import { Component, OnInit ,Output,Input, EventEmitter} from '@angular/core';
import { GetdataService } from '../../services/service.service';

@Component({
  selector: 'app-tolist',
  templateUrl: './tolist.component.html',
  styleUrls: ['./tolist.component.css']
})
export class TolistComponent implements OnInit {

  constructor(public getdata:GetdataService) { }
  // @Output() tolist = new EventEmitter<string>();
  ngOnInit() {
    document.getElementById('inp').focus();
    for(var i=0;i<10;i++){
      var getKey=localStorage.key(i); 
      if(this.getdata.getItem(getKey) !== undefined && getKey.slice(0,2) == 'to'){
        this.toarr.push(this.getdata.getItem(getKey));
      }
    }
  }

  data="";
  toarr=[];
  dolist=[];
  add(e){
    if(e.keyCode == 13){
        if(this.data !== ""){
          this.toarr.push(this.data);
          this.getdata.setItem('to'+this.data,this.data);
          this.data='';
        }else{
          document.getElementById('inp').setAttribute('placeholder','老铁，不能空着!');
        }
    }
      
    document.getElementById('inp').focus();
  }
  change(i){
    // this.tolist.emit(this.toarr[i]);
    this.dolist.push(i);
    this.getdata.setItem('do'+i,i);
    this.getdata.removeItem('to'+i);
    this.toarr.splice(i,1);
  }
  del(i){
    this.toarr.splice(i,1);
  }
  Dolist(e){
    this.toarr.push(e);
    this.getdata.setItem('to'+e,e);
    this.getdata.removeItem('do'+e);
  }
}
