import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
  ChangeDetectorRef,
  ViewRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {NotificationAnimationType} from '../../types/notification-animation-type.enum';
import {Notification} from '../../types/notification.type';
import {NotificationOptions, Position} from '../../types/notification-options.type';
import {NotificationCenterService} from '../../notification-center.service';
import {NotificationType} from '../../types/notification-type.enum';
import {NotificationEvent} from '../../types/notification-event.type';
import {Color} from '../../types/color.type';
import {DEFAULT_ICONS} from '../../constants/default-icons.const';
import {DomSanitizer} from '@angular/platform-browser';
import {UiButtonConfig, UI_BUTTON_ICON_STYLE, UI_BUTTON_STYLES, UI_BUTTON_THEMES, UI_BUTTON_VARIANTS} from '../button/button.component';

@Component({
  selector: 'b2p-notification-center',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationCenterComponent implements OnInit, OnDestroy {

  @Input() set options(opt: NotificationOptions) {
    this.usingComponentOptions = true;
    this.attachChanges(opt);
  }

  @Output() create = new EventEmitter();
  @Output() destroy = new EventEmitter();

  private listener: Subscription;
  private lastOnBottom = true;
  private maxStack = 8;
  private usingComponentOptions = false;

  errorIcons = this.domSanitizer.bypassSecurityTrustHtml(DEFAULT_ICONS.error);
  warningIcons = this.domSanitizer.bypassSecurityTrustHtml(DEFAULT_ICONS.warning);
  infoIcons = this.domSanitizer.bypassSecurityTrustHtml(DEFAULT_ICONS.info);
  upIcons = this.domSanitizer.bypassSecurityTrustHtml(DEFAULT_ICONS.up);
  notificationType = NotificationType;
  notifications: Array<Notification> = [];
  position: Position = ['bottom', 'right'];
  maxLength = 0;
  animate: NotificationAnimationType = NotificationAnimationType.FromRight;

  errorButton: UiButtonConfig = {
    buttonVariant: UI_BUTTON_VARIANTS.TOGGLE,
    buttonStyle: UI_BUTTON_STYLES.SOLID,
    buttonTheme: Color.DANGER,
    iconName: DEFAULT_ICONS.error,
    iconStyle: UI_BUTTON_ICON_STYLE.REGULAR,
  };

  warningButton: UiButtonConfig = {
    buttonVariant: UI_BUTTON_VARIANTS.TOGGLE,
    buttonStyle: UI_BUTTON_STYLES.SOLID,
    buttonTheme: Color.WARNING,
    iconName: DEFAULT_ICONS.warning,
    iconStyle: UI_BUTTON_ICON_STYLE.REGULAR,
  };

  infoButton: UiButtonConfig = {
    buttonVariant: UI_BUTTON_VARIANTS.TOGGLE,
    buttonStyle: UI_BUTTON_STYLES.SOLID,
    buttonTheme: Color.INFO,
    iconName: DEFAULT_ICONS.info,
    iconStyle: UI_BUTTON_ICON_STYLE.REGULAR,
  };

  constructor(
    private service: NotificationCenterService,
    private domSanitizer: DomSanitizer,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (!this.usingComponentOptions) {
      this.attachChanges(
        this.service.globalOptions
      );
    }

    this.listener = this.service.emitter
      .subscribe(item => {
        switch (item.command) {
          case 'cleanAll':
            this.notifications = [];
            break;

          case 'clean':
            this.cleanSingle(item.id);
            break;

          case 'set':
            if (item.add) {
              this.add(item.notification);
            } else {
              this.defaultBehavior(item);
            }
            break;

          default:
            this.defaultBehavior(item);
            break;
        }
        if (!(this.cd as ViewRef).destroyed) {
          this.cd.detectChanges();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
    this.cd.detach();
  }

  defaultBehavior(value: NotificationEvent): void {
    this.notifications.splice(this.notifications.indexOf(value.notification), 1);
    this.destroy.emit(this.buildEmit(value.notification, false));
  }

  add(item: Notification): void {
    if (!item) {
      return;
    }

    item.createdOn = new Date();

    if (this.lastOnBottom) {
      if (this.notifications.length >= this.maxStack) {
        this.notifications.splice(0, 1);
      }

      this.notifications.push(item);
    } else {
      if (this.notifications.length >= this.maxStack) {
        this.notifications.splice(this.notifications.length - 1, 1);
      }

      this.notifications.splice(0, 0, item);
    }

    this.create.emit(this.buildEmit(item, true));
  }

  checkStandard(checker: Notification, item: Notification): boolean {
    return checker.type === item.type
      && checker.title === item.title
      && checker.content === item.content;
  }

  // tslint:disable-next-line: no-any
  attachChanges(options: any): void {
    for (const key in options) {
      if (this.hasOwnProperty(key)) {
        // tslint:disable-next-line: no-any
        (this as any)[key] = options[key];
      }
    }
  }

  buildEmit(notification: Notification, to: boolean): Notification {
    const toEmit: Notification = {
      createdOn: notification.createdOn,
      type: notification.type,
      id: notification.id
    };

    toEmit.title = notification.title;
    toEmit.content = notification.content;

    if (!to) {
      toEmit.destroyedOn = new Date();
    }

    return toEmit;
  }

  cleanSingle(id: string): void {
    if (!id) {
      return;
    }

    let indexOfDelete = 0;
    let doDelete = false;
    let noti: Notification;

    this.notifications.forEach((notification, idx) => {
      if (notification.id === id) {
        indexOfDelete = idx;
        noti = notification;
        doDelete = true;
      }
    });

    if (doDelete) {
      this.notifications.splice(indexOfDelete, 1);
      this.destroy.emit(this.buildEmit(noti, false));
    }
  }

  hasTouchedNotifications(notificationType: NotificationType): boolean {
    return this.notifications.some(notif => notif.type === notificationType && notif.isTouched);
  }

  hasMinimizedNotifications(notificationType: NotificationType): boolean {
    return this.notifications.some(notif => notif.type === notificationType && notif.isMinimized);
  }

  onMinimize(): void {
    this.notifications.forEach(notif => {
      if (notif.type !== NotificationType.Success) {
        notif.isMinimized = true;
        notif.isTouched = true;
      }
    });
  }

  onToggleNotification(notificationType: NotificationType): void {
    if (this.getShownTypes().length > 1) {
      this.notifications.forEach(notif => {
        if (notif.type !== notificationType) {
          notif.isMinimized = true;
          notif.isTouched = true;
        } else {
          notif.isMinimized = false;
        }
      });
    } else {
      this.notifications.forEach(notif => {
        if (notif.type === notificationType && this.hasMinimizedNotifications(notif.type)) {
          notif.isMinimized = !notif.isMinimized;
          if (notif.isMinimized) {
            notif.isTouched = true;
          }
        } else {
          notif.isMinimized = true;
          notif.isTouched = true;
        }
      });
    }
  }

  getNotificationToShow(): Array<Notification> {
    return this.notifications.filter(notif => !notif.isMinimized);
  }

  getShownTypes(): Array<NotificationType> {
    return this.notifications.filter(notif => !notif.isMinimized)
      .map(notif => notif.type).filter((type, index, self) => self.indexOf(type) === index);
  }

  getMinimizeButtonColor(): Color {
    const showntypes: Array<NotificationType> = this.getShownTypes();
    if (showntypes.length === 2) {
      const indexSucess: number = showntypes.indexOf(NotificationType.Success);
      if (indexSucess > -1) {
        showntypes.splice(indexSucess, 1);
      }
    }

    if (showntypes.length === 1) {
      if (showntypes[0] === NotificationType.Success) {
        return Color.SUCCESS;
      } else if (showntypes[0] === NotificationType.Info) {
        return Color.INFO;
      } else if (showntypes[0] === NotificationType.Warning) {
        return Color.WARNING;
      } else if (showntypes[0] === NotificationType.Error) {
        return Color.DANGER;
      }
    }

    return Color.BLACK;
  }
}
