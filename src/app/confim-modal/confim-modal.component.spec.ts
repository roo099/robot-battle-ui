import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfimModalComponent } from './confim-modal.component';

describe('ConfimModalComponent', () => {
  let component: ConfimModalComponent;
  let fixture: ComponentFixture<ConfimModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [ConfimModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfimModalComponent);
    component = fixture.componentInstance;
    component.team = {
      id: 'comp-1_r-1_t-01',
      teamName: 'Test Team',
      roomColor: 'purple',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
