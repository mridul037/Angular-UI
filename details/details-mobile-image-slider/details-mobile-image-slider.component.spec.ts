import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMobileImageSliderComponent } from './details-mobile-image-slider.component';

describe('DetailsMobileImageSliderComponent', () => {
  let component: DetailsMobileImageSliderComponent;
  let fixture: ComponentFixture<DetailsMobileImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMobileImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMobileImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
