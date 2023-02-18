import {CommonModule} from '@angular/common';
import {InjectionToken} from '@angular/core';
import { NgModule } from '@angular/core';
import {NotificationCenterComponent} from './components/notification-center/notification-center.component';
import {BaseNotificationComponent} from './components/base-notification/base-notification.component';
import {DEFAULT_OPTIONS} from './constants/default-options.const';
import {NotificationCenterService} from './notification-center.service';
import {ModuleWithProviders} from '@angular/core';
import {B2PButtonComponent} from './components/button/button.component';

export const OPTIONS: InjectionToken<NotificationOptions> =
  new InjectionToken<NotificationOptions>('options');

export const optionsFactory = (options: NotificationOptions): NotificationOptions => ({
        ...DEFAULT_OPTIONS,
        ...options
    });

@NgModule({
    declarations: [
        B2PButtonComponent,
        BaseNotificationComponent,
        NotificationCenterComponent],
    imports: [
        CommonModule
    ],
    exports: [
        NotificationCenterComponent
    ]
})
export class NotificationCenterModule {
    static forRoot(options: NotificationOptions = {}): ModuleWithProviders<NotificationCenterModule> {
        return {
            ngModule: NotificationCenterModule,
            providers: [
                NotificationCenterService,
                {
                    provide: OPTIONS,
                    useValue: options
                },
                {
                    provide: 'options',
                    useFactory: optionsFactory,
                    deps: [OPTIONS]
                }
            ]
        };
    }
}
