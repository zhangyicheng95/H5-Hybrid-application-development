import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tolist',
  templateUrl: './tolist.component.html',
  styleUrls: ['./tolist.component.css']
})
export class TolistComponent implements OnInit {

  constructor() { }
  @Input() arrDate:Array<any>;
  ngOnInit() {
  }

}
