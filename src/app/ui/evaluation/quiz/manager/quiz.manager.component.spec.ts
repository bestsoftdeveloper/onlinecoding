import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz.ManagerComponent } from './quiz.manager.component';

describe('Quiz.ManagerComponent', () => {
  let component: Quiz.ManagerComponent;
  let fixture: ComponentFixture<Quiz.ManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz.ManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz.ManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
