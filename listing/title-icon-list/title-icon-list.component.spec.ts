import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleIconListComponent } from './title-icon-list.component';

describe('TitleIconListComponent', () => {
  let component: TitleIconListComponent;
  let fixture: ComponentFixture<TitleIconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleIconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
