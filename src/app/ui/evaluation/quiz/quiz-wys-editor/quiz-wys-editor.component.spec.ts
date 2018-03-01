import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizWysEditorComponent } from './quiz-wys-editor.component';

describe('QuizWysEditorComponent', () => {
  let component: QuizWysEditorComponent;
  let fixture: ComponentFixture<QuizWysEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizWysEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizWysEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
