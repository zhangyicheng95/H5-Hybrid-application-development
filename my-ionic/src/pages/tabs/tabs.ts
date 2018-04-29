import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = 'FabuPage';
  tab4Root = 'MsgPage';
  tab5Root = 'MypagePage';

  constructor(public params: NavParams) {}
}
