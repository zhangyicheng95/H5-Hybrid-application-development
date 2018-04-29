import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YabiPage } from './yabi';

@NgModule({
  declarations: [
    YabiPage,
  ],
  imports: [
    IonicPageModule.forChild(YabiPage),
  ],
})
export class YabiPageModule {}
