import { TestBed } from '@angular/core/testing';

import { B2pNotificationCenterService } from './b2p-notification-center.service';

describe('B2pNotificationCenterService', () => {
  let service: B2pNotificationCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B2pNotificationCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
