import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { ManageCompetitorsComponent } from './manage-competitors.component';
import { CompetitionService } from '../services/competition.service';

describe('ManageCompetitorsComponent', () => {
  let component: ManageCompetitorsComponent;
  let fixture: ComponentFixture<ManageCompetitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ManageCompetitorsComponent],
      providers: [
        {
          provide: CompetitionService,
          useValue: {
            getCompetitions: () => of([]),
            updateTeams: () => of({}),
            createTeam: () => of({}),
            deleteTeam: () => of({}),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageCompetitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
