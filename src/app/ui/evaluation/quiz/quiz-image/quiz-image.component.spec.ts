import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizImageComponent } from './quiz-image.component';

describe('QuizImageComponent', () => {
  let component: QuizImageComponent;
  let fixture: ComponentFixture<QuizImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
