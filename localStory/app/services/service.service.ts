import { Injectable } from '@angular/core';

@Injectable()
export class GetdataService {

  constructor() { }

  index:number;
  getIndex(i){
    this.index = i;
  }
  list = [1,2];

  get(num:number){
    this.list.push(num);
    return this.list;
  }
  // localStorage.setItem('name','[1,2]')
  setItem(key,value){
    window.localStorage[key]=value;
  }

  getItem(key){
    return window.localStorage[key] || '{}';
  }

  removeItem(key){
    window.localStorage.removeItem(key);
  }
}
