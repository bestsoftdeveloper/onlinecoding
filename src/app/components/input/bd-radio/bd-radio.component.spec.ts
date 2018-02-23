import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdRadioComponent } from './bd-radio.component';

describe('BdRadioComponent', () => {
  let component: BdRadioComponent;
  let fixture: ComponentFixture<BdRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
