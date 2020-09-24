import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {NotificationAnimationType} from '../../types/notification-animation-type.enum';
import {Notification} from '../../types/notification.type';

@Component({
  selector: 'b2p-base-notification',
  templateUrl: './base-notification.component.html',
  styleUrls: ['./base-notification.component.scss']
})

export class StubBaseNotificationComponent implements OnInit, OnDestroy {

  @Input() position: number;
  @Input() maxLength: number;
  @Input() animate: NotificationAnimationType;
  @Input() item: Notification;

  title: string | SafeHtml;
  content: string | SafeHtml;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onClose(): void {}
}
