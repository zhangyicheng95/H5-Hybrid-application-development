import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goodsdetail',
  templateUrl: './goodsdetail.component.html',
  styleUrls: ['./goodsdetail.component.css']
})
export class GoodsdetailComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }
  item;
  ngOnInit() {
    this.router.params.subscribe(data=>{
      this.item = '这是第'+ data.id +'件商品';
    });
  }
   
}
