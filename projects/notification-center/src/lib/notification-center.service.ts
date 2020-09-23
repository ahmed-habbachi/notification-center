import {Inject, Injectable} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {NotificationEvent} from './types/notification-event.type';
import {NotificationType} from './types/notification-type.enum';
import {Notification} from './types/notification.type';

@Injectable({
  providedIn: 'root'
})
export class NotificationCenterService {

  emitter = new Subject<NotificationEvent>();
  constructor(
    @Inject('options') public globalOptions: NotificationOptions
  ) {}

  set(notification: Notification, to: boolean): Notification {
    const radix = 36;
    const substring = 3;
    notification.id = Math.random().toString(radix).substring(substring);

    this.emitter.next({command: 'set', notification, add: to});
    return notification;
  }

  success(title: string | SafeHtml = '', content: string | SafeHtml = ''): Notification {
    return this.set({
      title,
      content: content || '',
      type: NotificationType.Success
    }, true);
  }

  info(title: string | SafeHtml = '', content: string | SafeHtml = ''): Notification {
    return this.set({
      title,
      content: content || '',
      type: NotificationType.Info
    }, true);
  }

  error(title: string | SafeHtml = '', content: string | SafeHtml = ''): Notification {
    return this.set({
      title,
      content: content || '',
      type: NotificationType.Error
    }, true);
  }

  warning(title: string | SafeHtml = '', content: string | SafeHtml = ''): Notification {
    return this.set({
      title,
      content: content || '',
      type: NotificationType.Warning
    }, true);
  }

  // With type method
  create(
    title: string | SafeHtml = '',
    content: string | SafeHtml = '',
    type: NotificationType = NotificationType.Success
  ): Notification {
    return this.set({
      title,
      content,
      type
    }, true);
  }

  // Remove all notifications method
  remove(id?: string): void {
    if (id) {
      this.emitter.next({command: 'clean', id});
    } else {
      this.emitter.next({command: 'cleanAll'});
    }
  }
}
