import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotKnockoutComponent } from './robot-knockout.component';

describe('RobotKnockoutComponent', () => {
  let component: RobotKnockoutComponent;
  let fixture: ComponentFixture<RobotKnockoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RobotKnockoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RobotKnockoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
