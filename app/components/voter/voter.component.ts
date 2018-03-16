import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  constructor() { }
  @Input() name:string;
  @Output() getIndex = new EventEmitter();

  ngOnInit() {
  }

  fns(i){
    this.getIndex.emit(i);
  }
}
