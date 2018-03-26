import { Component, OnInit, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { Http,Jsonp,Headers } from "@angular/http";  
import { Observable } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public router:ActivatedRoute,public _router:Router, public http:Http,public jsonp:Jsonp) { }
  list=[];
  ngOnInit() {
    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe( data=>{  
      this.list = data['_body'];
      console.log(data['_body'][0])
    },err=>{
      console.log(err);
    });
  }
  goDetial(i){
    this._router.navigate(['/goodslist/goodsdetail',i]);
  }
}
