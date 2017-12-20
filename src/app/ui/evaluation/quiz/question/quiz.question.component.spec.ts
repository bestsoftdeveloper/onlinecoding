import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz.QuestionComponent } from './quiz.question.component';

describe('Quiz.QuestionComponent', () => {
  let component: Quiz.QuestionComponent;
  let fixture: ComponentFixture<Quiz.QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz.QuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz.QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
