import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagContainerComponent } from './bag-container.component';

describe('BagContainerComponent', () => {
  let component: BagContainerComponent;
  let fixture: ComponentFixture<BagContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
