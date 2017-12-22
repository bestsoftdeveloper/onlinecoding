import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WysEditorComponent } from './wys-editor.component';

describe('WysEditorComponent', () => {
  let component: WysEditorComponent;
  let fixture: ComponentFixture<WysEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WysEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
