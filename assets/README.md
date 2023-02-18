<!-- omit in toc -->
# B2P-Notification-Center

Credits:
> This library is heavily inspired and a re-write of [Angular2-Notifications](https://github.com/flauc/angular2-notifications), started with some tweaks that a client needed and ends up changing a lot of principals of the original project.

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/ahmed-habbachi/notification-center/node.js.yml)
[![NPM Version](https://img.shields.io/npm/v/b2p-notification-center.svg)](https://www.npmjs.com/package/b2p-notification-center)
[![NPM Downloads](https://img.shields.io/npm/dt/b2p-notification-center.svg)](https://www.npmjs.com/package/b2p-notification-center)

- [Demo](#demo)
- [Setup](#setup)
- [Run demo project locally](#run-demo-project-locally)
- [Bonus](#bonus)
- [License](#license)

## Demo

[This demo](https://ahmed-habbachi.github.io/notification-center/) is provided by github pages as a result of a workflow (ci/cd deploy) means it is possible that i make a mistake and break it all.

## Setup

Install the library

```sh
npm i b2p-notification-center
```

Import the `NotificationCenterModule` in your root `AppModule`

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

Add the NotificationCenterModule to the component where you want to use the notifications. Or in your top level component for use in child components.

```js
...
template: '<b2p-notification-center></b2p-notification-center>'
...
```

You will also need to use the NotificationsService in your component to create notifications.

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

## Run demo project locally

In [github project repo](https://github.com/Ahmed-Habbachi/notification-center) you will find a project attached to the library, in order to run it locally follow these commands:

```shell
ng build b2p-notification-center #npm script 'build:lib'
cd dist/b2p-notification-center
npm link
cd ../..
npm link b2p-notification-center
ng serve notification-center-demo #npm script 'start'
```

## Bonus

to be able to work on the library and test live without interruption:

```shell
ng build b2p-notification-center --watch
ng serve notification-center-demo
```

That's it.

## License

MIT © [Ahmed HABBACHI](http://ahmed-develop.net/)
