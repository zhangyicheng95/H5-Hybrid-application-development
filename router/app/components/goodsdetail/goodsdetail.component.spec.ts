import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsdetailComponent } from './goodsdetail.component';

describe('GoodsdetailComponent', () => {
  let component: GoodsdetailComponent;
  let fixture: ComponentFixture<GoodsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
