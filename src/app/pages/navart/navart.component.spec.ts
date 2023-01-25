import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavartComponent } from './navart.component';

describe('NavartComponent', () => {
  let component: NavartComponent;
  let fixture: ComponentFixture<NavartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
