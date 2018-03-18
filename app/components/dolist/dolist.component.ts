import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import { GetdataService } from '../../services/service.service';
// import { Getdata } from '../../app.component.ts';

@Component({
  selector: 'app-dolist',
  templateUrl: './dolist.component.html',
  styleUrls: ['./dolist.component.css']
})
export class DolistComponent implements OnInit {

  constructor(public getdata:GetdataService) { }
  @Input() dodata=[];
  @Output() dolist = new EventEmitter<string>();
  ngOnInit() {
    this.doarr=this.dodata;
  }
  
  doarr=[];
  change2(i){
    this.dolist.emit(this.doarr[i]);
    this.doarr.splice(i,1);
    console.log(this.doarr);
    console.log(this.dodata);
  }
  del2(i){
    this.doarr.splice(i,1);
  }
  

}
