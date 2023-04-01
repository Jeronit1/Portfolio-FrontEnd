import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpLaboralIComponent } from './exp-laboral-i.component';

describe('ExpLaboralIComponent', () => {
  let component: ExpLaboralIComponent;
  let fixture: ComponentFixture<ExpLaboralIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpLaboralIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpLaboralIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
