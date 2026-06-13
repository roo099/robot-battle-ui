import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RobotKnockoutComponent } from './robot-knockout.component';
import { CompetitionService } from '../services/competition.service';

describe('RobotKnockoutComponent', () => {
  let component: RobotKnockoutComponent;
  let fixture: ComponentFixture<RobotKnockoutComponent>;
  let competitionServiceSpy: jasmine.SpyObj<CompetitionService>;

  beforeEach(async () => {
    competitionServiceSpy = jasmine.createSpyObj('CompetitionService', ['getCompetitions', 'updateTeam']);
    competitionServiceSpy.getCompetitions.and.returnValue(of([]));
    competitionServiceSpy.updateTeam.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [RobotKnockoutComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: () => null,
            }),
          },
        },
        { provide: CompetitionService, useValue: competitionServiceSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
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
