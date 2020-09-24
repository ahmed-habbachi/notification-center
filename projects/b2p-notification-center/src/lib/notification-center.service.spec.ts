import {inject, TestBed} from '@angular/core/testing';
import {Notification} from './types/notification.type';
import {NotificationCenterService} from './notification-center.service';
import {NotificationType} from './types/notification-type.enum';
import {NotificationAnimationType} from './types/notification-animation-type.enum';
import {OPTIONS, optionsFactory} from './notification-center.module';
import {NotificationEvent} from './types/notification-event.type';

describe('NotificationCenterService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [NotificationCenterService,
        {
          provide: OPTIONS,
          useValue: {}
        }, {
          provide: 'options',
          useFactory: optionsFactory,
          deps: [OPTIONS]
        }]
    });
  });

  const defaultNotification: Notification = {
    id: '0',
    title: 'Test title',
    type: NotificationType.Success,
    content: 'Test Content',
    maxLength: 0,
    animate: NotificationAnimationType.FromTop,
    createdOn: new Date(),
    destroyedOn: new Date()
  };

  it('Service instantiates',
    inject([NotificationCenterService], (service: NotificationCenterService) => {
      expect(service instanceof NotificationCenterService).toBeTruthy();
    })
  );

  it('Should generate random id',
    inject([NotificationCenterService], (service: NotificationCenterService) => {

      let notificationEvent: NotificationEvent = null;

      service.emitter.subscribe(item => notificationEvent = item);

      service.set(defaultNotification, true);

      expect(notificationEvent.command).toBe('set');
      expect(notificationEvent.notification.id !== '0').toBeTruthy();
    })
  );

  it('Success method',
    inject([NotificationCenterService], (service: NotificationCenterService) => {
      let notificationEvent: NotificationEvent = null;
      service.emitter.subscribe(item => notificationEvent = item);

      const notification: Notification = service.success('Title', 'Message');

      expect(notification.id !== undefined).toBeTruthy();
      expect(notification.type).toBe('success');

      expect(notification.title).toBe('Title');
      expect(notification.content).toBe('Message');
      expect(notification.state).toBeUndefined();
      expect(notification.createdOn).toBeUndefined();
      expect(notification.destroyedOn).toBeUndefined();
    })
  );

  it('Error method',
    inject([NotificationCenterService], (service: NotificationCenterService) => {
      let notificationEvent: NotificationEvent = null;
      service.emitter.subscribe(item => notificationEvent = item);

      const notification: Notification = service.error('Title', 'Message');

      expect(notification.id !== undefined).toBeTruthy();
      expect(notification.type).toBe('error');

      expect(notification.title).toBe('Title');
      expect(notification.content).toBe('Message');
      expect(notification.state).toBeUndefined();
      expect(notification.createdOn).toBeUndefined();
      expect(notification.destroyedOn).toBeUndefined();
    })
  );

  // it('Info method',
  // 	inject([NotificationsService], (service: NotificationsService) => {
  // 		let notificationEvent: NotificationEvent = null
  // 		service.emitter.subscribe(item => notificationEvent = item)

  // 		const notification: Notification = service.info('Title', 'Message')

  // 		expect(notification.id !== undefined).toBeTruthy()
  // 		expect(notification.type).toBe('info')

  // 		expect(notification.title).toBe('Title')
  // 		expect(notification.content).toBe('Message')
  // 		expect(notification.state).toBeUndefined()
  // 		expect(notification.createdOn).toBeUndefined()
  // 		expect(notification.destroyedOn).toBeUndefined()
  // 	})
  // )

  it('Warning method',
    inject([NotificationCenterService], (service: NotificationCenterService) => {
      let notificationEvent: NotificationEvent = null;
      service.emitter.subscribe(item => notificationEvent = item);

      const notification: Notification = service.warning('Title', 'Message');

      expect(notification.id !== undefined).toBeTruthy();
      expect(notification.type).toBe('warning');

      expect(notification.title).toBe('Title');
      expect(notification.content).toBe('Message');
      expect(notification.state).toBeUndefined();
      expect(notification.createdOn).toBeUndefined();
      expect(notification.destroyedOn).toBeUndefined();
    })
  );

  it('Create method',
    inject([NotificationCenterService], (service: NotificationCenterService) => {
      let notificationEvent: NotificationEvent = null;
      service.emitter.subscribe(item => notificationEvent = item);

      const notification: Notification = service.create('Title', 'Message', NotificationType.Error);

      expect(notification.id !== undefined).toBeTruthy();
      expect(notification.type).toBe(NotificationType.Error);

      expect(notification.title).toBe('Title');
      expect(notification.content).toBe('Message');
      expect(notification.state).toBeUndefined();
      expect(notification.createdOn).toBeUndefined();
      expect(notification.destroyedOn).toBeUndefined();
    })
  );

  it('Empty remove emits cleanAll command',
    inject([NotificationCenterService], (service: NotificationCenterService) => {
      let notificationEvent: NotificationEvent = null;
      service.emitter.subscribe(item => notificationEvent = item);

      service.remove();

      expect(notificationEvent.command).toBe('cleanAll');
    })
  );

  it('Remove with id emits clean command',
    inject([NotificationCenterService], (service: NotificationCenterService) => {
      let notificationEvent: NotificationEvent = null;
      service.emitter.subscribe(item => notificationEvent = item);

      service.remove('1');

      expect(notificationEvent.command).toBe('clean');
      expect(notificationEvent.id).toBe('1');
    })
  );

});
