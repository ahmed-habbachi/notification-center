/* eslint-disable @typescript-eslint/naming-convention */
import {NotificationAnimationType} from './notification-animation-type.enum';

export type VerticalPosition = 'top' | 'bottom' | 'middle';
export type HorizontalPosition = 'right' | 'left' | 'center';
export interface Position extends Array<VerticalPosition | HorizontalPosition> {
  0: VerticalPosition;
  1: HorizontalPosition;
}

export interface NotificationOptions {
  position?: Position;
  lastOnBottom?: boolean;
  maxLength?: number;
  maxStack?: number;
  animate?: NotificationAnimationType;
}
