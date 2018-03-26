import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';//双向引用模块
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { JsonpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { VoterComponent } from './components/voter/voter.component';
import { GetdataService} from './services/service.service';
import { DolistComponent } from './components/dolist/dolist.component';
import { TolistComponent } from './components/tolist/tolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { GoodsdetailComponent } from './components/goodsdetail/goodsdetail.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    DolistComponent,
    TolistComponent,
    GoodslistComponent,
    GoodsdetailComponent,
    NopageComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'tolist/:id/:num',component:TolistComponent},
      {path:'goodslist',component:GoodslistComponent,children:[{path:'goodsdetail/:id',component:GoodsdetailComponent}]},
      {path:'home/:a/:b',component:HomeComponent},
      // {path:'gooddetail/:id',component:GooddetailComponent},
      {path: "", redirectTo:"goodslist", pathMatch:"full"},  //设置默认路由路径
      {path: "**", component:NopageComponent}    //无论访问什么，都转跳到这个页面

    ])
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
