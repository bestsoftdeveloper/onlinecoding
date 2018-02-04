import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleComponetComponent } from './console-componet.component';

describe('ConsoleComponetComponent', () => {
  let component: ConsoleComponetComponent;
  let fixture: ComponentFixture<ConsoleComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
