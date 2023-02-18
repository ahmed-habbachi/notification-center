import {animate, state, style, transition, trigger} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {DEFAULT_ICONS} from '../../constants/default-icons.const';
import {NotificationCenterService} from '../../notification-center.service';
import {NotificationAnimationType} from '../../types/notification-animation-type.enum';
import {NotificationType} from '../../types/notification-type.enum';
import {Notification} from '../../types/notification.type';

@Component({
  selector: 'b2p-base-notification',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('enterLeave', [

      // Fade
      state('fade', style({opacity: 1})),
      transition('* => fade', [
        style({opacity: 0}),
        animate('400ms ease-in-out')
      ]),
      state('fadeOut', style({opacity: 0})),
      transition('fade => fadeOut', [
        style({opacity: 1}),
        animate('300ms ease-in-out')
      ]),

      // Enter from top
      state('fromTop', style({opacity: 1, transform: 'translateY(0)'})),
      transition('* => fromTop', [
        style({opacity: 0, transform: 'translateY(-5%)'}),
        animate('400ms ease-in-out')
      ]),
      state('fromTopOut', style({opacity: 0, transform: 'translateY(5%)'})),
      transition('fromTop => fromTopOut', [
        style({opacity: 1, transform: 'translateY(0)'}),
        animate('300ms ease-in-out')
      ]),

      // Enter from right
      state('fromRight', style({opacity: 1, transform: 'translateX(0)'})),
      transition('* => fromRight', [
        style({opacity: 0, transform: 'translateX(5%)'}),
        animate('400ms ease-in-out')
      ]),
      state('fromRightOut', style({opacity: 0, transform: 'translateX(-5%)'})),
      transition('fromRight => fromRightOut', [
        style({opacity: 1, transform: 'translateX(0)'}),
        animate('300ms ease-in-out')
      ]),

      // Enter from bottom
      state('fromBottom', style({opacity: 1, transform: 'translateY(0)'})),
      transition('* => fromBottom', [
        style({opacity: 0, transform: 'translateY(5%)'}),
        animate('400ms ease-in-out')
      ]),
      state('fromBottomOut', style({opacity: 0, transform: 'translateY(-5%)'})),
      transition('fromBottom => fromBottomOut', [
        style({opacity: 1, transform: 'translateY(0)'}),
        animate('300ms ease-in-out')
      ]),

      // Enter from left
      state('fromLeft', style({opacity: 1, transform: 'translateX(0)'})),
      transition('* => fromLeft', [
        style({opacity: 0, transform: 'translateX(-5%)'}),
        animate('400ms ease-in-out')
      ]),
      state('fromLeftOut', style({opacity: 0, transform: 'translateX(5%)'})),
      transition('fromLeft => fromLeftOut', [
        style({opacity: 1, transform: 'translateX(0)'}),
        animate('300ms ease-in-out')
      ])
    ])
  ],
  templateUrl: './base-notification.component.html',
  styleUrls: ['./base-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BaseNotificationComponent implements OnInit, OnDestroy {

  @Input() position: number;
  @Input() maxLength: number;
  @Input() animate: NotificationAnimationType;
  @Input() item: Notification;

  closeIcons = this.domSanitizer.bypassSecurityTrustHtml(DEFAULT_ICONS.close);
  title: string | SafeHtml;
  content: string | SafeHtml;

  constructor(
    private notificationService: NotificationCenterService,
    private domSanitizer: DomSanitizer,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.animate) {
      this.item.state = this.animate;
    }

    this.initNotificationContent(this.item.title, 'title');
    this.initNotificationContent(this.item.content, 'content');

    if (this.item.type === NotificationType.success) {
      const timeout = 5000;
      setTimeout(() => {
        this.remove();
      }, timeout);
    }
  }

  ngOnDestroy(): void {
    this.cd.detach();
  }

  onClose(): void {
    this.remove();
  }

  private remove(): void {
    if (this.animate) {
      this.item.state = this.animate + 'Out';
      const timeout = 310;
      setTimeout(() => {
        this.notificationService.remove(this.item.id);
      }, timeout);
    } else {
      this.notificationService.remove(this.item.id);
    }
  }

  private initNotificationContent(item: string | SafeHtml, key: string): void {
    switch (key) {
      case 'title':
        if (typeof item === 'string') {
          this.title = this.domSanitizer.bypassSecurityTrustHtml(item);
        } else {
          this.title = item;
        }
        break;
      case 'content':
        if (typeof item === 'string') {
          this.content = this.domSanitizer.bypassSecurityTrustHtml(item);
        } else {
          this.title = item;
        }
        break;
    }
  }
}
