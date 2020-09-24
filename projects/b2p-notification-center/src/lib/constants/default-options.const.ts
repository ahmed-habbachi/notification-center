import {NotificationOptions} from '../types/notification-options.type';
import {NotificationAnimationType} from '../types/notification-animation-type.enum';

export const DEFAULT_OPTIONS: NotificationOptions = {
  position: ['top', 'right'],
  lastOnBottom: true,
  maxLength: 0,
  maxStack: 100,
  animate: NotificationAnimationType.FromTop
};
