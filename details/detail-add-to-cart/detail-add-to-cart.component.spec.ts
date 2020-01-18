import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAddToCartComponent } from './detail-add-to-cart.component';

describe('DetailAddToCartComponent', () => {
  let component: DetailAddToCartComponent;
  let fixture: ComponentFixture<DetailAddToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAddToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
