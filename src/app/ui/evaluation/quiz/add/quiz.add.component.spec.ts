import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz.AddComponent } from './quiz.add.component';

describe('Quiz.AddComponent', () => {
  let component: Quiz.AddComponent;
  let fixture: ComponentFixture<Quiz.AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz.AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz.AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
