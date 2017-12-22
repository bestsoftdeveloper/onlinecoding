import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz.HeaderComponent } from './quiz.header.component';

describe('Quiz.HeaderComponent', () => {
  let component: Quiz.HeaderComponent;
  let fixture: ComponentFixture<Quiz.HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz.HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz.HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
