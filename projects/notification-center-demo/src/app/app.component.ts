import { Component } from '@angular/core';
import { NotificationType } from 'dist/notification-center';
import { NotificationCenterService } from 'dist/notification-center';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notification-center-demo';
  notificationType = NotificationType;

  constructor(private notificationservice: NotificationCenterService) { }
  public addNotification(notificationType: NotificationType): void {
    switch (notificationType) {
      case NotificationType.Error:
        this.notificationservice.error('', 'Test Error');
        break;
      case NotificationType.Warning:
        this.notificationservice.warning('', 'Test Warning');
        break;
      case NotificationType.Info:
        this.notificationservice.info('', 'Test Info');
        break;
      default:
        this.notificationservice.success('', 'Test Success');
        break;
    }
  }
}
