import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//双向引用模块

import { AppComponent } from './app.component';
import { VoterComponent } from './components/voter/voter.component';
import { GetdataService} from './services/service.service';
import { DolistComponent } from './components/dolist/dolist.component';
import { TolistComponent } from './components/tolist/tolist.component';


@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    DolistComponent,
    TolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
