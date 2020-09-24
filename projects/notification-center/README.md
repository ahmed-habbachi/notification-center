# B2P-Notification-Center

Credits:
> This library is heavily inspired and a re-write of [Angular2-Notifications](https://github.com/flauc/angular2-notifications), started with some tweeks that a client needed and ends up changing a lot of principals of the original project.

[![NPM Version](https://img.shields.io/npm/v/b2p-notification-center.svg)](https://www.npmjs.com/package/b2p-notification-center)
[![NPM Downloads](https://img.shields.io/npm/dt/b2p-notification-center.svg)](https://www.npmjs.com/package/b2p-notification-center)

## Setup

Install the library

```sh
npm i b2p-notification-center
```

Import the `NotificationCenterModule` in to your root `AppModule`

```ts
import { NotificationCenterModule } from 'b2p-notification-center';

@NgModule({
    imports: [
        BrowserModule,
        // Animations need to be imported in to your project to use the library
        BrowserAnimationsModule,
        NotificationCenterModule.forRoot()
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Add the NotificationCenterModule in to the component where you want to use the notifications. Or in your top level component for use in child components.

```js
...
template: '<b2p-notification-center></b2p-notification-center>'
...
```

You will also need to use the NotificationsService in your component to create or remove the notifications.

```js
...
constructor( private notificationservice: NotificationCenterService ) {}
...
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
...
```

## Demo Project

In [github project repo](https://github.com/Ahmed-Habbachi/notification-center) you will find a project attached to the library, in order to run it locally follow these commands:

```shell
ng build notification-center #npm script 'build:lib'
ng serve notification-center-demo #npm script 'start'
```

## License

MIT © [Ahmed HABBACHI](http://ahmed-develop.net/)
