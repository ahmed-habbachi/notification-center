import {Component} from '@angular/core';
import {Notification, NotificationType, NotificationCenterService} from 'b2p-notification-center';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  notification: Notification = {
    title: '',
    content: '',
    type: NotificationType.Success,
  }
  // notification: Notification = {
  //   title: 'Notification test',
  //   content: 'This is a test notification!',
  //   type: NotificationType.Success,
  // }

  notificationType = NotificationType;

  constructor(private notificationservice: NotificationCenterService) { }

  public addNotification(notificationType: NotificationType): void {
    const _notification: Notification = {...this.notification};

    if (!this.notification.title) {
      _notification.title = 'Title';
    }

    if (!this.notification.content) {
      _notification.content = 'Test Content';
    }

    switch (notificationType) {
      case NotificationType.Error:
        this.notificationservice.error(_notification.title, _notification.content);
        break;
      case NotificationType.Warning:
        this.notificationservice.warning(_notification.title, _notification.content);
        break;
      case NotificationType.Info:
        this.notificationservice.info(_notification.title, _notification.content);
        break;
      default:
        this.notificationservice.success(_notification.title, _notification.content);
        break;
    }
  }
}
