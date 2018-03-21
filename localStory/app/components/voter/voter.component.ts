import { Component, OnInit, Input, Output,EventEmitter,Optional} from '@angular/core';
import { GetdataService} from '../../services/service.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css'],
  providers: [GetdataService]
})
export class VoterComponent implements OnInit {

  // getdata = new GetdataService();
  constructor(@Optional() public getdata:GetdataService) { }

  @Input() name:string;
  @Output() getIndex = new EventEmitter();

  ngOnChanges(){
    console.log('OnChanges');
  }
  
  num:number;
  ngOnInit() {
    if(this.getdata){
      this.getdata.get(200);
      this.getdata.get(300);
      console.log(this.getdata.list);
    }
  }
  ngDoCheck(){
    // console.log('Docheck');
  }
  ngOnDestory(){
    // clearInterval(this.timer);
  }

  fn(i){
    // this.getdata.getIndex(i);
    this.getIndex.emit(i);
  }
}
