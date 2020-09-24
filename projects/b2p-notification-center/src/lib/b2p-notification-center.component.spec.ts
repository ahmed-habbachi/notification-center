import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2pNotificationCenterComponent } from './b2p-notification-center.component';

describe('B2pNotificationCenterComponent', () => {
  let component: B2pNotificationCenterComponent;
  let fixture: ComponentFixture<B2pNotificationCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2pNotificationCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2pNotificationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
