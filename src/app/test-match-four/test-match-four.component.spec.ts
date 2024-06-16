import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatchFourComponent } from './test-match-four.component';

describe('TestMatchFourComponent', () => {
  let component: TestMatchFourComponent;
  let fixture: ComponentFixture<TestMatchFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMatchFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatchFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
