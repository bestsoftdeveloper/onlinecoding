import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoddingMirrorComponent } from './codding-mirror.component';

describe('CoddingMirrorComponent', () => {
  let component: CoddingMirrorComponent;
  let fixture: ComponentFixture<CoddingMirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoddingMirrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoddingMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
