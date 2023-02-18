import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {NotificationCenterComponent} from './notification-center.component';
import {StubBaseNotificationComponent} from '../base-notification/base-notification.component.stub';
import {NotificationCenterService} from '../../notification-center.service';
import {OPTIONS, optionsFactory} from '../../notification-center.module';
import {Notification} from '../../types/notification.type';
import {NotificationType} from '../../types/notification-type.enum';
import {NotificationAnimationType} from '../../types/notification-animation-type.enum';
import {Color} from '../../types/color.type';

describe('NotificationCenterComponent', () => {
  let component: NotificationCenterComponent;
  let fixture: ComponentFixture<NotificationCenterComponent>;

  const defaultNotification: Notification = {
    id: '0',
    title: 'Test title',
    type: NotificationType.info,
    content: 'Test Content',
    maxLength: 0,
    animate: NotificationAnimationType.fromTop,
    createdOn: new Date(),
    destroyedOn: new Date()
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [StubBaseNotificationComponent, NotificationCenterComponent],
      providers: [NotificationCenterService,
        {
          provide: OPTIONS,
          useValue: {}
        }, {
          provide: 'options',
          useFactory: optionsFactory,
          deps: [OPTIONS]
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add notification', () => {
    component.add(defaultNotification);
    fixture.detectChanges();
    expect(component.notifications.length).toBeGreaterThan(0);
  });

  it('should have touched notification', () => {
    defaultNotification.isTouched = true;
    component.add(defaultNotification);
    fixture.detectChanges();
    expect(component.hasTouchedNotifications(NotificationType.info)).toBeTruthy();
  });

  it('should have minimized notification', () => {
    component.add(defaultNotification);
    fixture.detectChanges();
    component.onMinimize();
    fixture.detectChanges();
    expect(component.hasMinimizedNotifications(NotificationType.info)).toBeTruthy();
  });

  it('should have minimize icon colored with info color', () => {
    component.add(defaultNotification);
    component.add({
      id: '0',
      title: 'Test title',
      type: NotificationType.info,
      content: 'Test Content'
    });
    fixture.detectChanges();
    expect(component.getMinimizeButtonColor()).toBe(Color.info);
  });

  it('should have minimize icon colored with black color', () => {
    component.add(defaultNotification);
    component.add({
      id: '0',
      title: 'Test title',
      type: NotificationType.warning,
      content: 'Test Content'
    });
    component.add({
      id: '0',
      title: 'Test title',
      type: NotificationType.error,
      content: 'Test Content'
    });
    fixture.detectChanges();
    expect(component.getMinimizeButtonColor()).toBe('black');
  });

  it('should have info type notification visible', () => {
    component.add(defaultNotification);
    component.add({
      id: '0',
      title: 'Test title',
      type: NotificationType.warning,
      content: 'Test Content',
      isMinimized: true,
      isTouched: true
    });
    component.add({
      id: '0',
      title: 'Test title',
      type: NotificationType.error,
      content: 'Test Content',
      isMinimized: true,
      isTouched: true
    });
    fixture.detectChanges();
    component.onMinimize();
    fixture.detectChanges();
    component.onToggleNotification(NotificationType.info);

    for (const notification of component.getNotificationToShow()) {
      expect(notification.type).toBe(NotificationType.info);
      expect(notification.isMinimized).toBeFalsy();
    }
  });
});
