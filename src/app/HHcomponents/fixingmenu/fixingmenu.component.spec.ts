import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixingmenuComponent } from './fixingmenu.component';

describe('FixingmenuComponent', () => {
  let component: FixingmenuComponent;
  let fixture: ComponentFixture<FixingmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixingmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixingmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
