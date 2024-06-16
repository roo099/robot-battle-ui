import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompetitorsComponent } from './manage-competitors.component';

describe('ManageCompetitorsComponent', () => {
  let component: ManageCompetitorsComponent;
  let fixture: ComponentFixture<ManageCompetitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageCompetitorsComponent]
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
