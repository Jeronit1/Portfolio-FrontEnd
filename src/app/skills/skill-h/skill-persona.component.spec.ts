import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPersonaComponent } from './skill-persona.component';

describe('SkillPersonaComponent', () => {
  let component: SkillPersonaComponent;
  let fixture: ComponentFixture<SkillPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
