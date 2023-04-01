import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoHComponent } from './proyecto-h.component';

describe('ProyectoHComponent', () => {
  let component: ProyectoHComponent;
  let fixture: ComponentFixture<ProyectoHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
