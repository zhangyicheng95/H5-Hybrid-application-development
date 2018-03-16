import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TolistComponent } from './components/tolist/tolist.component';
import { VoterComponent } from './components/voter/voter.component';


@NgModule({
  declarations: [
    AppComponent,
    TolistComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
