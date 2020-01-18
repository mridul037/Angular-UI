import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingStylesComponent } from './listing-styles.component';

describe('ListingStylesComponent', () => {
  let component: ListingStylesComponent;
  let fixture: ComponentFixture<ListingStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
