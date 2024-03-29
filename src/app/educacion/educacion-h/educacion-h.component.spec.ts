import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionHComponent } from './educacion-h.component';

describe('EducacionHComponent', () => {
  let component: EducacionHComponent;
  let fixture: ComponentFixture<EducacionHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
