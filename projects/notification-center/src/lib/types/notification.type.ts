import {NotificationType} from './notification-type.enum';
import {NotificationAnimationType} from './notification-animation-type.enum';
import {SafeHtml} from '@angular/platform-browser';

export interface Notification {
  id?: string;
  type: NotificationType;
  title?: string | SafeHtml;
  content?: string | SafeHtml;
  state?: string;
  isMinimized?: boolean;
  isTouched?: boolean;
  createdOn?: Date;
  destroyedOn?: Date;
  animate?: NotificationAnimationType;
  maxLength?: number;
}
