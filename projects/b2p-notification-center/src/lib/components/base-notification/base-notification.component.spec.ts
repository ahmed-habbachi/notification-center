import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import SpyObj = jasmine.SpyObj;
import {BaseNotificationComponent} from './base-notification.component';
import {Notification} from '../../types/notification.type';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DomSanitizer} from '@angular/platform-browser';
import {NotificationType} from '../../types/notification-type.enum';
import {NotificationAnimationType} from '../../types/notification-animation-type.enum';
import {NotificationCenterService} from '../../notification-center.service';
import {OPTIONS, optionsFactory} from '../../notification-center.module';

describe('BaseNotificationComponent', () => {
  let component: BaseNotificationComponent;
  let fixture: ComponentFixture<BaseNotificationComponent>;
  let sanitizer: DomSanitizer;
  const defaultNotification: Notification = {
    id: '0',
    title: 'Test title',
    type: NotificationType.success,
    content: 'Test Content',
    maxLength: 0,
    animate: NotificationAnimationType.fromTop,
    createdOn: new Date(),
    destroyedOn: new Date()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [BaseNotificationComponent],
      providers: [
        NotificationCenterService,
        {
          provide: OPTIONS,
          useValue: {}
        }, {
          provide: 'options',
          useFactory: optionsFactory,
          deps: [OPTIONS]
        },
      ]
    })
      .compileComponents();
    sanitizer = TestBed.inject(DomSanitizer);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNotificationComponent);
    component = fixture.componentInstance;
    component.item = defaultNotification;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init Notification title', () => {
    expect(component.title).toEqual(sanitizer.bypassSecurityTrustHtml('Test title'));
    expect(component.content).toEqual(sanitizer.bypassSecurityTrustHtml('Test Content'));
  });
});
