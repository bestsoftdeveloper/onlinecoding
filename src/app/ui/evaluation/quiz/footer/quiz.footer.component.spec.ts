import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz.FooterComponent } from './quiz.footer.component';

describe('Quiz.FooterComponent', () => {
  let component: Quiz.FooterComponent;
  let fixture: ComponentFixture<Quiz.FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz.FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz.FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
