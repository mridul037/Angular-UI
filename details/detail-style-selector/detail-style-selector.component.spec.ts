import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStyleSelectorComponent } from './detail-style-selector.component';

describe('DetailStyleSelectorComponent', () => {
  let component: DetailStyleSelectorComponent;
  let fixture: ComponentFixture<DetailStyleSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStyleSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStyleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
