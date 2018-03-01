import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationWrapperComponent } from './notification-wrapper.component';

describe('NotificationWrapperComponent', () => {
  let component: NotificationWrapperComponent;
  let fixture: ComponentFixture<NotificationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
