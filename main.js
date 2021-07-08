(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/notification-center/notification-center/projects/notification-center-demo/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HIqd":
/*!***********************************************************************************************************************************************!*\
  !*** /home/runner/work/notification-center/notification-center/dist/b2p-notification-center/__ivy_ngcc__/fesm2015/b2p-notification-center.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: Color, DEFAULT_ICONS, DEFAULT_OPTIONS, NotificationAnimationType, NotificationCenterComponent, NotificationCenterModule, NotificationCenterService, NotificationType, OPTIONS, getIcon, optionsFactory, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ICONS", function() { return DEFAULT_ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OPTIONS", function() { return DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAnimationType", function() { return NotificationAnimationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCenterComponent", function() { return NotificationCenterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCenterModule", function() { return NotificationCenterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCenterService", function() { return NotificationCenterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS", function() { return OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return getIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFactory", function() { return optionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return B2PButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return BaseNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "f7+R");









function NotificationCenterComponent_div_0_b2p_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b2p-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationCenterComponent_div_0_b2p_button_2_Template_b2p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onToggleNotification(ctx_r5.notificationType.Error); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r1.errorButtonConfig)("isActive", !ctx_r1.hasMinimizedNotifications(ctx_r1.notificationType.Error));
} }
function NotificationCenterComponent_div_0_b2p_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b2p-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationCenterComponent_div_0_b2p_button_3_Template_b2p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onToggleNotification(ctx_r7.notificationType.Warning); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r2.warningButtonConfig)("isActive", !ctx_r2.hasMinimizedNotifications(ctx_r2.notificationType.Warning));
} }
function NotificationCenterComponent_div_0_b2p_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b2p-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationCenterComponent_div_0_b2p_button_4_Template_b2p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onToggleNotification(ctx_r9.notificationType.Info); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r3.infoButtonConfig)("isActive", !ctx_r3.hasMinimizedNotifications(ctx_r3.notificationType.Info));
} }
function NotificationCenterComponent_div_0_div_5_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationCenterComponent_div_0_div_5_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.onMinimize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r11.getMinimizeIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function NotificationCenterComponent_div_0_div_5_b2p_base_notification_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "b2p-base-notification", 12);
} if (rf & 2) {
    const a_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", a_r15)("maxLength", ctx_r12.maxLength)("animate", ctx_r12.animate)("position", i_r16);
} }
function NotificationCenterComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationCenterComponent_div_0_div_5_span_1_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationCenterComponent_div_0_div_5_b2p_base_notification_3_Template, 1, 4, "b2p-base-notification", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getMinimizeButtonColor() !== "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.getNotificationToShow());
} }
function NotificationCenterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationCenterComponent_div_0_b2p_button_2_Template, 1, 2, "b2p-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationCenterComponent_div_0_b2p_button_3_Template, 1, 2, "b2p-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationCenterComponent_div_0_b2p_button_4_Template, 1, 2, "b2p-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationCenterComponent_div_0_div_5_Template, 4, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasTouchedNotifications(ctx_r0.notificationType.Error));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasTouchedNotifications(ctx_r0.notificationType.Warning));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasTouchedNotifications(ctx_r0.notificationType.Info));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getNotificationToShow().length !== 0);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return { "error": a0, "warning": a1, "success": a2, "info": a3, "blink": a4 }; };
function B2PButtonComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.config.buttonLabel);
} }
function B2PButtonComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("ui-button__icon ", ctx_r1.currentIconStyle, " fa-", ctx_r1.currentIconName, "");
} }
function B2PButtonComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ui-button__icon ", ctx_r2.currentIconStyle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.currentIconSVG, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function B2PButtonComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.badged);
} }
const _c1 = function (a0, a1, a2) { return { "active": a0, "wiggle-1": a1, "wiggle-2": a2 }; };
const DEFAULT_ICONS = {
    alert: `
    <svg width="24" height="24" viewBox="0 0 16 16" class="b2p-notification-svg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
    </svg>
  `,
    error: `
    <svg width="24" height="24" viewBox="0 0 16 16" class="b2p-notification-svg" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
    </svg>
  `,
    info: `
    <svg width="24" height="24" viewBox="0 0 16 16" class="b2p-notification-svg" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
      <circle cx="8" cy="4.5" r="1"/>
    </svg>
  `,
    success: `
    <svg class="b2p-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="24" viewBox="0 0 16 16" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
    </svg>
  `,
    warning: `
    <svg width="24" height="24" viewBox="0 0 16 16" class="b2p-notification-svg" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
      <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
    </svg>
  `,
    close: `
    <svg class="b2p-notification-svg" width="24" height="24" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    up: `
    <svg class="b2p-notification-svg" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
    </svg>
  `
};
function getIcon(icon, color) {
    switch (icon) {
        case 'alert':
            return `
      <svg width="24" height="24" viewBox="0 0 16 16" class="b2p-notification-svg" fill="${color}" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
      </svg>
    `;
        case 'error':
            return `
      <svg width="24" height="24" viewBox="0 0 16 16" class="b2p-notification-svg" fill="${color}" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
      </svg>
      `;
        case 'info':
            return `
      <svg width="24" height="24" viewBox="0 0 16 16" class="b2p-notification-svg" fill="${color}" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
        <circle cx="8" cy="4.5" r="1"/>
      </svg>
      `;
        case 'success':
            return `
      <svg class="b2p-notification-svg" xmlns="http://www.w3.org/2000/svg" fill="${color}" height="24" viewBox="0 0 16 16" width="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
      </svg>
      `;
        case 'warning':
            return `
      <svg width="24" height="24" viewBox="0 0 16 16" class="b2p-notification-svg" fill="${color}" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
      </svg>
      `;
        case 'close':
            return `
      <svg class="b2p-notification-svg" width="24" height="24" viewBox="0 0 16 16" fill="${color}" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      `;
        case 'up':
            return `
      <svg class="b2p-notification-svg" width="3em" height="3em" viewBox="0 0 16 16" fill="${color}" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
      </svg>
      `;
        default:
            return '';
    }
}

var NotificationAnimationType;
(function (NotificationAnimationType) {
    NotificationAnimationType["Fade"] = "fade";
    NotificationAnimationType["FromTop"] = "fromTop";
    NotificationAnimationType["FromRight"] = "fromRight";
    NotificationAnimationType["FromBottom"] = "fromBottom";
    NotificationAnimationType["FromLeft"] = "fromLeft";
    NotificationAnimationType["Scale"] = "scale";
    NotificationAnimationType["Rotate"] = "rotate";
})(NotificationAnimationType || (NotificationAnimationType = {}));

const DEFAULT_OPTIONS = {
    position: ['top', 'right'],
    lastOnBottom: true,
    maxLength: 0,
    maxStack: 100,
    animate: NotificationAnimationType.FromTop
};

var Color;
(function (Color) {
    Color["PRIMARY"] = "primary";
    Color["SECONDARY"] = "secondary";
    Color["SUCCESS"] = "success";
    Color["WARNING"] = "warning";
    Color["DANGER"] = "danger";
    Color["INFO"] = "info";
    Color["WHITE"] = "white";
    Color["BLACK"] = "black";
})(Color || (Color = {}));

var NotificationType;
(function (NotificationType) {
    NotificationType["Success"] = "success";
    NotificationType["Error"] = "error";
    NotificationType["Warning"] = "warning";
    NotificationType["Info"] = "info";
})(NotificationType || (NotificationType = {}));

class NotificationCenterService {
    constructor(globalOptions) {
        this.globalOptions = globalOptions;
        this.emitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    set(notification, to) {
        const radix = 36;
        const substring = 3;
        if (!notification.id) {
            notification.id = Math.random().toString(radix).substring(substring);
        }
        this.emitter.next({ command: 'set', notification, add: to });
        return notification;
    }
    success(title = '', content = '') {
        return this.set({
            title,
            content: content || '',
            type: NotificationType.Success
        }, true);
    }
    info(title = '', content = '') {
        return this.set({
            title,
            content: content || '',
            type: NotificationType.Info
        }, true);
    }
    error(title = '', content = '') {
        return this.set({
            title,
            content: content || '',
            type: NotificationType.Error
        }, true);
    }
    warning(title = '', content = '') {
        return this.set({
            title,
            content: content || '',
            type: NotificationType.Warning
        }, true);
    }
    // With type method
    create(title = '', content = '', type = NotificationType.Success) {
        return this.set({
            title,
            content,
            type
        }, true);
    }
    // Remove all notifications method
    remove(id) {
        if (id) {
            this.emitter.next({ command: 'clean', id });
        }
        else {
            this.emitter.next({ command: 'cleanAll' });
        }
    }
}
NotificationCenterService.ɵfac = function NotificationCenterService_Factory(t) { return new (t || NotificationCenterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('options')); };
NotificationCenterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationCenterService, factory: NotificationCenterService.ɵfac });
NotificationCenterService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['options',] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationCenterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['options']
            }] }]; }, null); })();

class NotificationCenterComponent {
    constructor(service, domSanitizer, cd) {
        this.service = service;
        this.domSanitizer = domSanitizer;
        this.cd = cd;
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lastOnBottom = true;
        this.maxStack = 8;
        this.usingComponentOptions = false;
        // errorIcons = this.domSanitizer.bypassSecurityTrustHtml(DEFAULT_ICONS.error);
        // warningIcons = this.domSanitizer.bypassSecurityTrustHtml(DEFAULT_ICONS.warning);
        // infoIcons = this.domSanitizer.bypassSecurityTrustHtml(DEFAULT_ICONS.info);
        this.upIcons = this.domSanitizer.bypassSecurityTrustHtml(DEFAULT_ICONS.up);
        this.notificationType = NotificationType;
        this.notifications = [];
        this.position = ['bottom', 'right'];
        this.maxLength = 0;
        this.animate = NotificationAnimationType.FromRight;
        this.errorButtonConfig = {
            buttonVariant: "toggle" /* TOGGLE */,
            buttonStyle: "solid" /* SOLID */,
            buttonTheme: Color.DANGER,
            iconSVG: getIcon('error', '#ffffff'),
            iconSVGActive: getIcon('error', this.getColorInHex(Color.DANGER)),
            iconStyle: "far" /* REGULAR */,
        };
        this.warningButtonConfig = {
            buttonVariant: "toggle" /* TOGGLE */,
            buttonStyle: "solid" /* SOLID */,
            buttonTheme: Color.WARNING,
            iconSVG: getIcon('warning', '#ffffff'),
            iconSVGActive: getIcon('warning', this.getColorInHex(Color.WARNING)),
            iconStyle: "far" /* REGULAR */,
        };
        this.infoButtonConfig = {
            buttonVariant: "toggle" /* TOGGLE */,
            buttonStyle: "solid" /* SOLID */,
            buttonTheme: Color.INFO,
            iconSVG: getIcon('info', '#ffffff'),
            iconSVGActive: getIcon('info', this.getColorInHex(Color.INFO)),
            iconStyle: "far" /* REGULAR */,
        };
    }
    set options(opt) {
        this.usingComponentOptions = true;
        this.attachChanges(opt);
    }
    ngOnInit() {
        if (!this.usingComponentOptions) {
            this.attachChanges(this.service.globalOptions);
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
                    }
                    else {
                        this.defaultBehavior(item);
                    }
                    break;
                default:
                    this.defaultBehavior(item);
                    break;
            }
            if (!this.cd.destroyed) {
                this.cd.detectChanges();
            }
        });
    }
    ngOnDestroy() {
        if (this.listener) {
            this.listener.unsubscribe();
        }
        this.cd.detach();
    }
    defaultBehavior(value) {
        this.notifications.splice(this.notifications.indexOf(value.notification), 1);
        this.destroy.emit(this.buildEmit(value.notification, false));
    }
    add(item) {
        if (!item) {
            return;
        }
        item.createdOn = new Date();
        if (this.lastOnBottom) {
            if (this.notifications.length >= this.maxStack) {
                this.notifications.splice(0, 1);
            }
            this.notifications.push(item);
        }
        else {
            if (this.notifications.length >= this.maxStack) {
                this.notifications.splice(this.notifications.length - 1, 1);
            }
            this.notifications.splice(0, 0, item);
        }
        this.create.emit(this.buildEmit(item, true));
    }
    checkStandard(checker, item) {
        return checker.type === item.type
            && checker.title === item.title
            && checker.content === item.content;
    }
    // tslint:disable-next-line: no-any
    attachChanges(options) {
        for (const key in options) {
            if (this.hasOwnProperty(key)) {
                // tslint:disable-next-line: no-any
                this[key] = options[key];
            }
        }
    }
    buildEmit(notification, to) {
        const toEmit = {
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
    cleanSingle(id) {
        if (!id) {
            return;
        }
        let indexOfDelete = 0;
        let doDelete = false;
        let noti;
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
    hasTouchedNotifications(notificationType) {
        return this.notifications.some(notif => notif.type === notificationType && notif.isTouched);
    }
    hasMinimizedNotifications(notificationType) {
        return this.notifications.some(notif => notif.type === notificationType && notif.isMinimized);
    }
    onMinimize() {
        this.notifications.forEach(notif => {
            if (notif.type !== NotificationType.Success) {
                notif.isMinimized = true;
                notif.isTouched = true;
            }
        });
    }
    onToggleNotification(notificationType) {
        if (this.getShownTypes().length > 1) {
            this.notifications.forEach(notif => {
                if (notif.type !== notificationType) {
                    notif.isMinimized = true;
                    notif.isTouched = true;
                }
                else {
                    notif.isMinimized = false;
                }
            });
        }
        else {
            this.notifications.forEach(notif => {
                if (notif.type === notificationType && this.hasMinimizedNotifications(notif.type)) {
                    notif.isMinimized = !notif.isMinimized;
                    if (notif.isMinimized) {
                        notif.isTouched = true;
                    }
                }
                else {
                    notif.isMinimized = true;
                    notif.isTouched = true;
                }
            });
        }
    }
    getNotificationToShow() {
        return this.notifications.filter(notif => !notif.isMinimized);
    }
    getShownTypes() {
        return this.notifications.filter(notif => !notif.isMinimized)
            .map(notif => notif.type).filter((type, index, self) => self.indexOf(type) === index);
    }
    getMinimizeButtonColor() {
        const showntypes = this.getShownTypes();
        if (showntypes.length === 2) {
            const indexSucess = showntypes.indexOf(NotificationType.Success);
            if (indexSucess > -1) {
                showntypes.splice(indexSucess, 1);
            }
        }
        if (showntypes.length === 1) {
            if (showntypes[0] === NotificationType.Success) {
                return Color.SUCCESS;
            }
            else if (showntypes[0] === NotificationType.Info) {
                return Color.INFO;
            }
            else if (showntypes[0] === NotificationType.Warning) {
                return Color.WARNING;
            }
            else if (showntypes[0] === NotificationType.Error) {
                return Color.DANGER;
            }
        }
        return Color.BLACK;
    }
    getMinimizeIcon() {
        let upIconColor = Color.BLACK;
        const showntypes = this.getShownTypes();
        if (showntypes.length === 2) {
            const indexSucess = showntypes.indexOf(NotificationType.Success);
            if (indexSucess > -1) {
                showntypes.splice(indexSucess, 1);
            }
        }
        if (showntypes.length === 1) {
            if (showntypes[0] === NotificationType.Success) {
                upIconColor = Color.SUCCESS;
            }
            else if (showntypes[0] === NotificationType.Info) {
                upIconColor = Color.INFO;
            }
            else if (showntypes[0] === NotificationType.Warning) {
                upIconColor = Color.WARNING;
            }
            else if (showntypes[0] === NotificationType.Error) {
                upIconColor = Color.DANGER;
            }
        }
        return this.domSanitizer.bypassSecurityTrustHtml(getIcon('up', this.getColorInHex(upIconColor)));
    }
    getColorInHex(colorName) {
        switch (colorName) {
            case 'danger':
                return '#CB0101';
            case 'warning':
                return '#FFD800';
            case 'info':
                return '#0FAEED';
            case 'success':
                return '#76dd55';
            default:
                return '#000000';
        }
    }
}
NotificationCenterComponent.ɵfac = function NotificationCenterComponent_Factory(t) { return new (t || NotificationCenterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotificationCenterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
NotificationCenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationCenterComponent, selectors: [["b2p-notification-center"]], inputs: { options: "options" }, outputs: { create: "create", destroy: "destroy" }, decls: 1, vars: 1, consts: [["class", "vg-base-notification-wrapper", 3, "ngClass", 4, "ngIf"], [1, "vg-base-notification-wrapper", 3, "ngClass"], [1, "notification-center_buttons"], ["class", "notification-center_button", 3, "config", "isActive", "click", 4, "ngIf"], ["class", "notification-wrapper", 4, "ngIf"], [1, "notification-center_button", 3, "config", "isActive", "click"], [1, "notification-wrapper"], ["class", "minimize", 3, "click", 4, "ngIf"], [1, "notifications-container", "hide-scrollbars"], [3, "item", "maxLength", "animate", "position", 4, "ngFor", "ngForOf"], [1, "minimize", 3, "click"], [3, "innerHTML"], [3, "item", "maxLength", "animate", "position"]], template: function NotificationCenterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotificationCenterComponent_div_0_Template, 6, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifications.length > 0);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], B2PButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], BaseNotificationComponent]; }, styles: [".vg-base-notification-wrapper{margin-right:-2px;position:fixed;width:300px;z-index:1000}.vg-base-notification-wrapper.left{left:30px}.vg-base-notification-wrapper.top{top:80px}.vg-base-notification-wrapper.right{right:30px}.vg-base-notification-wrapper.bottom{bottom:20px}.vg-base-notification-wrapper.center{left:50%;transform:translateX(-50%)}.vg-base-notification-wrapper.middle{top:50%;transform:translateY(-50%)}.vg-base-notification-wrapper.middle.center{transform:translate(-50%,-50%)}.notification-center_buttons{margin-right:11px;max-height:36px;text-align:end}.notification-center_button{border-radius:3px;box-shadow:0 3px 11px 0 #c9c9c9;margin-left:8px}.notification-wrapper{margin-right:10px;position:absolute;top:73px;width:300px}.notifications-container{max-height:calc(100vh - 183px);overflow-y:auto;position:relative;top:33px}.minimize{cursor:pointer;position:absolute;right:120px}.hide-scrollbars{-ms-overflow-style:none;scrollbar-width:none}.hide-scrollbars::-webkit-scrollbar{background:transparent;width:0}@media (max-width:340px){.vg-base-notification-wrapper{left:30px;right:30px;width:auto}}"], encapsulation: 2, changeDetection: 0 });
NotificationCenterComponent.ctorParameters = () => [
    { type: NotificationCenterService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
NotificationCenterComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    create: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    destroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationCenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'b2p-notification-center',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: "<div *ngIf=\"notifications.length > 0\" class=\"vg-base-notification-wrapper\" [ngClass]=\"position\">\n\t<div class=\"notification-center_buttons\">\n    <b2p-button *ngIf=\"hasTouchedNotifications(notificationType.Error)\" [config]=\"errorButtonConfig\" class=\"notification-center_button\" [isActive]=\"!hasMinimizedNotifications(notificationType.Error)\" (click)=\"onToggleNotification(notificationType.Error)\" ></b2p-button>\n    <b2p-button *ngIf=\"hasTouchedNotifications(notificationType.Warning)\" [config]=\"warningButtonConfig\" class=\"notification-center_button\" [isActive]=\"!hasMinimizedNotifications(notificationType.Warning)\" (click)=\"onToggleNotification(notificationType.Warning)\" ></b2p-button>\n    <b2p-button *ngIf=\"hasTouchedNotifications(notificationType.Info)\" [config]=\"infoButtonConfig\" class=\"notification-center_button\" [isActive]=\"!hasMinimizedNotifications(notificationType.Info)\" (click)=\"onToggleNotification(notificationType.Info)\"></b2p-button>\n\t</div>\n\t<div *ngIf=\"getNotificationToShow().length !== 0\" class=\"notification-wrapper\">\n\t\t<span *ngIf=\"getMinimizeButtonColor() !== 'success'\" class=\"minimize\" (click)=\"onMinimize()\">\n\t\t\t<div [innerHTML]=\"getMinimizeIcon()\"></div>\n\t\t</span>\n\t\t<div class=\"notifications-container hide-scrollbars\">\n\t\t\t<b2p-base-notification *ngFor=\"let a of getNotificationToShow(); let i = index\" [item]=\"a\"  [maxLength]=\"maxLength\" [animate]=\"animate\" [position]=\"i\">\n\t\t\t</b2p-base-notification>\n\t\t</div>\n\t</div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".vg-base-notification-wrapper{margin-right:-2px;position:fixed;width:300px;z-index:1000}.vg-base-notification-wrapper.left{left:30px}.vg-base-notification-wrapper.top{top:80px}.vg-base-notification-wrapper.right{right:30px}.vg-base-notification-wrapper.bottom{bottom:20px}.vg-base-notification-wrapper.center{left:50%;transform:translateX(-50%)}.vg-base-notification-wrapper.middle{top:50%;transform:translateY(-50%)}.vg-base-notification-wrapper.middle.center{transform:translate(-50%,-50%)}.notification-center_buttons{margin-right:11px;max-height:36px;text-align:end}.notification-center_button{border-radius:3px;box-shadow:0 3px 11px 0 #c9c9c9;margin-left:8px}.notification-wrapper{margin-right:10px;position:absolute;top:73px;width:300px}.notifications-container{max-height:calc(100vh - 183px);overflow-y:auto;position:relative;top:33px}.minimize{cursor:pointer;position:absolute;right:120px}.hide-scrollbars{-ms-overflow-style:none;scrollbar-width:none}.hide-scrollbars::-webkit-scrollbar{background:transparent;width:0}@media (max-width:340px){.vg-base-notification-wrapper{left:30px;right:30px;width:auto}}"]
            }]
    }], function () { return [{ type: NotificationCenterService }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], destroy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class BaseNotificationComponent {
    constructor(notificationService, domSanitizer, cd) {
        this.notificationService = notificationService;
        this.domSanitizer = domSanitizer;
        this.cd = cd;
        this.closeIcons = this.domSanitizer.bypassSecurityTrustHtml(DEFAULT_ICONS.close);
    }
    ngOnInit() {
        if (this.animate) {
            this.item.state = this.animate;
        }
        this.initNotificationContent(this.item.title, 'title');
        this.initNotificationContent(this.item.content, 'content');
        if (this.item.type === NotificationType.Success) {
            const timeout = 5000;
            setTimeout(() => {
                this.remove();
            }, timeout);
        }
    }
    ngOnDestroy() {
        this.cd.detach();
    }
    onClose() {
        this.remove();
    }
    remove() {
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            const timeout = 310;
            setTimeout(() => {
                this.notificationService.remove(this.item.id);
            }, timeout);
        }
        else {
            this.notificationService.remove(this.item.id);
        }
    }
    initNotificationContent(item, key) {
        switch (key) {
            case 'title':
                if (typeof item === 'string') {
                    this.title = this.domSanitizer.bypassSecurityTrustHtml(item);
                }
                else {
                    this.title = item;
                }
                break;
            case 'content':
                if (typeof item === 'string') {
                    this.content = this.domSanitizer.bypassSecurityTrustHtml(item);
                }
                else {
                    this.title = item;
                }
                break;
        }
    }
}
BaseNotificationComponent.ɵfac = function BaseNotificationComponent_Factory(t) { return new (t || BaseNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotificationCenterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BaseNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseNotificationComponent, selectors: [["b2p-base-notification"]], inputs: { position: "position", maxLength: "maxLength", animate: "animate", item: "item" }, decls: 8, vars: 12, consts: [[1, "vg-base-notification", 3, "ngClass"], [3, "click"], [1, "icon", "close_icon", 3, "ngClass", "innerHTML"], [1, "vgbn-body"], [1, "vgbn-title"], [1, "vgbn-title", 3, "innerHTML"], [1, "vgbn-content"], [1, "vgbn-content", 3, "innerHTML"]], template: function BaseNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseNotificationComponent_Template_span_click_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterLeave", ctx.item.state)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](6, _c0, ctx.item.type === "error", ctx.item.type === "warning", ctx.item.type === "success", ctx.item.type === "info", !ctx.item.isTouched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.item.type === "warning" ? "black" : "white")("innerHTML", ctx.closeIcons, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@-webkit-keyframes Pulsate-Red{0%{background:#cb0101}50%{background:#960000}to{background:#cb0101}}@keyframes Pulsate-Red{0%{background:#cb0101}50%{background:#960000}to{background:#cb0101}}@-webkit-keyframes Pulsate-Blue{0%{background:#0faeed}50%{background:#006696}to{background:#0faeed}}@keyframes Pulsate-Blue{0%{background:#0faeed}50%{background:#006696}to{background:#0faeed}}@-webkit-keyframes Pulsate-Green{0%{background:#18bc18}50%{background:#26f526}to{background:#18bc18}}@keyframes Pulsate-Green{0%{background:#18bc18}50%{background:#26f526}to{background:#18bc18}}@-webkit-keyframes Pulsate-Yellow{0%{background:#ffd800}50%{background:#ffe65c}to{background:#ffd800}}@keyframes Pulsate-Yellow{0%{background:#ffd800}50%{background:#ffe65c}to{background:#ffd800}}.vg-base-notification{border-radius:5px;box-shadow:0 3px 11px 0 #c9c9c9;box-sizing:border-box;color:#fff;float:right;margin-bottom:15px;margin-right:13px;min-height:70px;padding:10px 20px;position:relative;width:90%}.vg-base-notification .vgbn-body{display:flex;flex-flow:column}.vg-base-notification .vgbn-content,.vg-base-notification .vgbn-title{margin:.5px 0 0}.vg-base-notification .vgbn-title{font-size:20px;line-height:30px}.vg-base-notification .vgbn-content{font-size:14px;line-height:15px}.vg-base-notification.has-icon .vgbn-content,.vg-base-notification.has-icon .vgbn-title{padding:0 50px 0 0}.vg-base-notification.error{background:#cb0101}.vg-base-notification.success{background:#76dd55}.vg-base-notification.warning{background:#ffd800}.vg-base-notification.info{background:#0faeed}.vg-base-notification.error.blink{-webkit-animation:Pulsate-Red 4s linear 1s infinite;animation:Pulsate-Red 4s linear 1s infinite}.vg-base-notification.success.blink{-webkit-animation:Pulsate-Green 4s linear 1s infinite;animation:Pulsate-Green 4s linear 1s infinite}.vg-base-notification.warning.blink{-webkit-animation:Pulsate-Yellow 4s linear 1s infinite;animation:Pulsate-Yellow 4s linear 1s infinite}.vg-base-notification.info.blink{-webkit-animation:Pulsate-Blue 4s linear 1s infinite;animation:Pulsate-Blue 4s linear 1s infinite}.vg-base-notification.warning div .vgbn-content,.vg-base-notification.warning div .vgbn-html,.vg-base-notification.warning div .vgbn-title{color:#855d02}.close_icon{cursor:pointer;position:absolute;right:10px}"], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterLeave', [
                // Fade
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fadeOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('fade => fadeOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in-out')
                ]),
                // Enter from top
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromTop', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => fromTop', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(-5%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromTopOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(5%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('fromTop => fromTopOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in-out')
                ]),
                // Enter from right
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => fromRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(5%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromRightOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(-5%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('fromRight => fromRightOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in-out')
                ]),
                // Enter from bottom
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromBottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => fromBottom', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(5%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromBottomOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(-5%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('fromBottom => fromBottomOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in-out')
                ]),
                // Enter from left
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => fromLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(-5%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromLeftOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(5%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('fromLeft => fromLeftOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in-out')
                ])
            ])
        ] }, changeDetection: 0 });
BaseNotificationComponent.ctorParameters = () => [
    { type: NotificationCenterService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
BaseNotificationComponent.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'b2p-base-notification',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('enterLeave', [
                        // Fade
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => fade', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fadeOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('fade => fadeOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in-out')
                        ]),
                        // Enter from top
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromTop', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => fromTop', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(-5%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromTopOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(5%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('fromTop => fromTopOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in-out')
                        ]),
                        // Enter from right
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => fromRight', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(5%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromRightOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(-5%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('fromRight => fromRightOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in-out')
                        ]),
                        // Enter from bottom
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromBottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => fromBottom', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(5%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromBottomOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(-5%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('fromBottom => fromBottomOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in-out')
                        ]),
                        // Enter from left
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => fromLeft', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(-5%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('fromLeftOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(5%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('fromLeft => fromLeftOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('300ms ease-in-out')
                        ])
                    ])
                ],
                template: "<div class=\"vg-base-notification\" [@enterLeave]=\"item.state\" [ngClass]=\"{\n            'error': item.type === 'error',\n            'warning': item.type === 'warning',\n            'success': item.type === 'success',\n            'info': item.type === 'info',\n\t\t\t\t\t\t'blink': !item.isTouched\n        }\">\n\t<span (click)=\"onClose()\">\n\t\t<div class=\"icon close_icon\" [ngClass]=\"item.type === 'warning' ? 'black' : 'white'\" [innerHTML]=\"closeIcons\"></div>\n\t</span>\n\t<div class=\"vgbn-body\">\n\t\t<div class=\"vgbn-title\">\n\t\t\t<div class=\"vgbn-title\" [innerHTML]=\"title\"></div>\n\t\t</div>\n\t\t<div class=\"vgbn-content\">\n\t\t\t<div class=\"vgbn-content\" [innerHTML]=\"content\"></div>\n\t\t</div>\n\t</div>\n\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: ["@-webkit-keyframes Pulsate-Red{0%{background:#cb0101}50%{background:#960000}to{background:#cb0101}}@keyframes Pulsate-Red{0%{background:#cb0101}50%{background:#960000}to{background:#cb0101}}@-webkit-keyframes Pulsate-Blue{0%{background:#0faeed}50%{background:#006696}to{background:#0faeed}}@keyframes Pulsate-Blue{0%{background:#0faeed}50%{background:#006696}to{background:#0faeed}}@-webkit-keyframes Pulsate-Green{0%{background:#18bc18}50%{background:#26f526}to{background:#18bc18}}@keyframes Pulsate-Green{0%{background:#18bc18}50%{background:#26f526}to{background:#18bc18}}@-webkit-keyframes Pulsate-Yellow{0%{background:#ffd800}50%{background:#ffe65c}to{background:#ffd800}}@keyframes Pulsate-Yellow{0%{background:#ffd800}50%{background:#ffe65c}to{background:#ffd800}}.vg-base-notification{border-radius:5px;box-shadow:0 3px 11px 0 #c9c9c9;box-sizing:border-box;color:#fff;float:right;margin-bottom:15px;margin-right:13px;min-height:70px;padding:10px 20px;position:relative;width:90%}.vg-base-notification .vgbn-body{display:flex;flex-flow:column}.vg-base-notification .vgbn-content,.vg-base-notification .vgbn-title{margin:.5px 0 0}.vg-base-notification .vgbn-title{font-size:20px;line-height:30px}.vg-base-notification .vgbn-content{font-size:14px;line-height:15px}.vg-base-notification.has-icon .vgbn-content,.vg-base-notification.has-icon .vgbn-title{padding:0 50px 0 0}.vg-base-notification.error{background:#cb0101}.vg-base-notification.success{background:#76dd55}.vg-base-notification.warning{background:#ffd800}.vg-base-notification.info{background:#0faeed}.vg-base-notification.error.blink{-webkit-animation:Pulsate-Red 4s linear 1s infinite;animation:Pulsate-Red 4s linear 1s infinite}.vg-base-notification.success.blink{-webkit-animation:Pulsate-Green 4s linear 1s infinite;animation:Pulsate-Green 4s linear 1s infinite}.vg-base-notification.warning.blink{-webkit-animation:Pulsate-Yellow 4s linear 1s infinite;animation:Pulsate-Yellow 4s linear 1s infinite}.vg-base-notification.info.blink{-webkit-animation:Pulsate-Blue 4s linear 1s infinite;animation:Pulsate-Blue 4s linear 1s infinite}.vg-base-notification.warning div .vgbn-content,.vg-base-notification.warning div .vgbn-html,.vg-base-notification.warning div .vgbn-title{color:#855d02}.close_icon{cursor:pointer;position:absolute;right:10px}"]
            }]
    }], function () { return [{ type: NotificationCenterService }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class B2PButtonComponent {
    // CONSTRUCTOR ////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.active = false;
    }
    get isActive() {
        return this.active;
    }
    set isActive(value) {
        if (value !== this.active) {
            this.toggleStatus({ propagate: false });
        }
    }
    // GETTER / SETTER ////////////////////////////////////////////////////////////////////////////////////////////////
    get isToggleButton() {
        return this.config.buttonVariant === "toggle" /* TOGGLE */;
    }
    // PUBLIC FUNCTIONS ///////////////////////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.config.buttonVariant = this.config.buttonVariant || "simple" /* SIMPLE */;
        this.config.buttonStyle = this.config.buttonStyle || "lined" /* LINED */;
        this.config.buttonTheme = this.config.buttonTheme || "primary" /* PRIMARY */;
        this.config.iconStyle = this.config.iconStyle || "fas" /* SOLID */;
        this.config.tooltipTheme = this.config.tooltipTheme || this.config.buttonTheme;
        this.config.iconStyleActive = this.config.iconStyleActive || this.config.iconStyle;
        this.config.iconNameActive = this.config.iconNameActive || this.config.iconName;
        this.config.iconSVGActive = this.config.iconSVGActive || this.config.iconSVG;
        this.config.tooltipActive = this.config.tooltipActive || this.config.tooltip;
        this.currentIconStyle = this.config.iconStyle;
        this.currentIconName = this.config.iconName;
        this.currentIconSVG = this.domSanitizer.bypassSecurityTrustHtml(this.config.iconSVG);
        this.currentTooltip = this.config.tooltip;
        if (this.config.active$ === undefined) {
            this.config.active$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        }
        // if (this.config.clicked$ === undefined) {
        // 	this.config.clicked$ = new Subject<never>();
        // }
        this.activeSubscription = this.config.active$.subscribe(active => {
            if (active !== undefined && active !== this.active) {
                this.toggleStatus({ propagate: false });
            }
        });
    }
    ngOnDestroy() {
        if (this.activeSubscription) {
            this.activeSubscription.unsubscribe();
        }
    }
    // •◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦
    toggleStatus({ propagate = true } = {}) {
        this.active = !this.active;
        this.currentIconStyle = this.active ? this.config.iconStyleActive : this.config.iconStyle;
        this.currentIconName = this.active ? this.config.iconNameActive : this.config.iconName;
        this.currentIconSVG = this.domSanitizer.bypassSecurityTrustHtml(this.active ? this.config.iconSVGActive : this.config.iconSVG);
        this.currentTooltip = this.active ? this.config.tooltipActive : this.config.tooltip;
        if (propagate) {
            this.config.active$.next(this.active);
            if (this.config.onClick2) {
                this.config.onClick2(this.active);
            }
        }
    }
    // PROTECTED FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////////////
    // PRIVATE FUNCTIONS //////////////////////////////////////////////////////////////////////////////////////////////
    // EVENT HANDLER //////////////////////////////////////////////////////////////////////////////////////////////////
    onClick() {
        if (this.config.clicked$) {
            this.config.clicked$.next();
            if (this.isToggleButton) {
                this.toggleStatus();
            }
        }
        else {
            if (this.isToggleButton) {
                this.toggleStatus();
            }
        }
    }
    wiggle(rem) {
        return this.badged > 0 && ((+this.badged % 2) === rem) && !this.active;
    }
}
B2PButtonComponent.ɵfac = function B2PButtonComponent_Factory(t) { return new (t || B2PButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
B2PButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2PButtonComponent, selectors: [["b2p-button"]], inputs: { isActive: "isActive", config: "config", badged: "badged" }, decls: 5, vars: 14, consts: [[3, "ngClass", "click"], ["class", "ui-button__label", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "class", "innerHTML", 4, "ngIf"], ["class", "notification-badge", 4, "ngIf"], [1, "ui-button__label"], [3, "innerHTML"], [1, "notification-badge"]], template: function B2PButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B2PButtonComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, B2PButtonComponent_span_1_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, B2PButtonComponent_i_2_Template, 1, 4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, B2PButtonComponent_div_3_Template, 1, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, B2PButtonComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("ui-button ui-button--", ctx.config.buttonVariant, " ui-button--", ctx.config.buttonTheme, " ui-button--", ctx.config.buttonStyle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c1, ctx.active, ctx.wiggle(0), ctx.wiggle(1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.buttonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentIconName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentIconName && ctx.currentIconSVG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.badged && !ctx.active);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box}.ui-button[_ngcontent-%COMP%], [_nghost-%COMP%]{display:inline-block;height:36px}.ui-button[_ngcontent-%COMP%]{font-size:.75rem;line-height:20px;min-width:36px;outline:none!important;padding:2px 8px;position:relative;text-transform:uppercase}.ui-button[_ngcontent-%COMP%]   .ui-button__label[_ngcontent-%COMP%]{padding:0 12px 0 4px}.ui-button[_ngcontent-%COMP%]   .ui-button__icon[_ngcontent-%COMP%]{font-size:.875rem;padding-top:4px}.ui-button.ui-button--icon[_ngcontent-%COMP%]{background:none;border:none}.ui-button.ui-button--lined[_ngcontent-%COMP%]{background:none;border-radius:4px}.ui-button.ui-button--solid[_ngcontent-%COMP%]{border:none;border-radius:4px}.ui-button--solid.ui-button--danger[_ngcontent-%COMP%]{background:#cb0101;border-color:#cb0101}.ui-button--solid.ui-button--success[_ngcontent-%COMP%]{background:#76dd55;border-color:#76dd55}.ui-button--solid.ui-button--warning[_ngcontent-%COMP%]{background:#ffd800;border-color:#ffd800}.ui-button--solid.ui-button--info[_ngcontent-%COMP%]{background:#0faeed;border-color:#0faeed}.ui-button--lined.ui-button--danger[_ngcontent-%COMP%]{color:#cb0101}.ui-button--lined.ui-button--success[_ngcontent-%COMP%]{color:#76dd55}.ui-button--lined.ui-button--warning[_ngcontent-%COMP%]{color:#ffd800}.ui-button--lined.ui-button--info[_ngcontent-%COMP%]{color:#0faeed}.ui-button.active[_ngcontent-%COMP%]{background:transparent;border-radius:4px;border-style:solid;border-width:2px;padding:0 6px}.notification-badge[_ngcontent-%COMP%]{background:#ed6b06;border-radius:50px;color:#fff;font-size:14px;font-weight:700;height:20px;line-height:20px;padding:0 6px;position:absolute;right:-4px;top:-4px;width:auto}.wiggle-1[_ngcontent-%COMP%], .wiggle-2[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px;transform:translateZ(0)}.wiggle-1[_ngcontent-%COMP%]{-webkit-animation:wiggle1 .82s cubic-bezier(.36,.07,.19,.97) both;animation:wiggle1 .82s cubic-bezier(.36,.07,.19,.97) both}.wiggle-2[_ngcontent-%COMP%]{-webkit-animation:wiggle2 .82s cubic-bezier(.36,.07,.19,.97) both;animation:wiggle2 .82s cubic-bezier(.36,.07,.19,.97) both}@-webkit-keyframes wiggle1{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@keyframes wiggle1{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@-webkit-keyframes wiggle2{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@keyframes wiggle2{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}"] });
B2PButtonComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
B2PButtonComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    badged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](B2PButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'b2p-button',
                template: "<button [ngClass]=\"{\n\t'active': active,\n\t'wiggle-1': wiggle(0),\n\t'wiggle-2': wiggle(1)\n\t}\" class=\"ui-button ui-button--{{config.buttonVariant}} ui-button--{{config.buttonTheme}} ui-button--{{config.buttonStyle}}\" (click)=\"onClick()\">\n  <span *ngIf=\"config.buttonLabel\" class=\"ui-button__label\">{{config.buttonLabel}}</span>\n    <i *ngIf=\"currentIconName\" class=\"ui-button__icon {{currentIconStyle}} fa-{{currentIconName}}\"></i>\n    <div *ngIf=\"!currentIconName && currentIconSVG\" class=\"ui-button__icon {{currentIconStyle}}\" [innerHTML]=\"currentIconSVG\"></div>\n\t<div *ngIf=\"badged && !active\" class=\"notification-badge\">{{badged}}</div>\n</button>\n",
                styles: ["*,:after,:before{box-sizing:border-box}.ui-button,:host{display:inline-block;height:36px}.ui-button{font-size:.75rem;line-height:20px;min-width:36px;outline:none!important;padding:2px 8px;position:relative;text-transform:uppercase}.ui-button .ui-button__label{padding:0 12px 0 4px}.ui-button .ui-button__icon{font-size:.875rem;padding-top:4px}.ui-button.ui-button--icon{background:none;border:none}.ui-button.ui-button--lined{background:none;border-radius:4px}.ui-button.ui-button--solid{border:none;border-radius:4px}.ui-button--solid.ui-button--danger{background:#cb0101;border-color:#cb0101}.ui-button--solid.ui-button--success{background:#76dd55;border-color:#76dd55}.ui-button--solid.ui-button--warning{background:#ffd800;border-color:#ffd800}.ui-button--solid.ui-button--info{background:#0faeed;border-color:#0faeed}.ui-button--lined.ui-button--danger{color:#cb0101}.ui-button--lined.ui-button--success{color:#76dd55}.ui-button--lined.ui-button--warning{color:#ffd800}.ui-button--lined.ui-button--info{color:#0faeed}.ui-button.active{background:transparent;border-radius:4px;border-style:solid;border-width:2px;padding:0 6px}.notification-badge{background:#ed6b06;border-radius:50px;color:#fff;font-size:14px;font-weight:700;height:20px;line-height:20px;padding:0 6px;position:absolute;right:-4px;top:-4px;width:auto}.wiggle-1,.wiggle-2{-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px;transform:translateZ(0)}.wiggle-1{-webkit-animation:wiggle1 .82s cubic-bezier(.36,.07,.19,.97) both;animation:wiggle1 .82s cubic-bezier(.36,.07,.19,.97) both}.wiggle-2{-webkit-animation:wiggle2 .82s cubic-bezier(.36,.07,.19,.97) both;animation:wiggle2 .82s cubic-bezier(.36,.07,.19,.97) both}@-webkit-keyframes wiggle1{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@keyframes wiggle1{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@-webkit-keyframes wiggle2{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}@keyframes wiggle2{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}"]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], badged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

const OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('options');
function optionsFactory(options) {
    return Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
}
class NotificationCenterModule {
    static forRoot(options = {}) {
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
NotificationCenterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationCenterModule });
NotificationCenterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationCenterModule_Factory(t) { return new (t || NotificationCenterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationCenterModule, { declarations: function () { return [B2PButtonComponent, BaseNotificationComponent, NotificationCenterComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [NotificationCenterComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationCenterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    B2PButtonComponent,
                    BaseNotificationComponent,
                    NotificationCenterComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                exports: [
                    NotificationCenterComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of notification-center
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=b2p-notification-center.js.map

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var b2p_notification_center__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! b2p-notification-center */ "HIqd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");






function AppComponent_pre_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng generate component xyz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng add @angular/material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng add @angular/pwa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng add _____");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_pre_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ng build --prod");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(notificationservice) {
        this.notificationservice = notificationservice;
        this.notification = {
            title: '',
            content: '',
            type: b2p_notification_center__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].Success,
        };
        // notification: Notification = {
        //   title: 'Notification test',
        //   content: 'This is a test notification!',
        //   type: NotificationType.Success,
        // }
        this.notificationType = b2p_notification_center__WEBPACK_IMPORTED_MODULE_1__["NotificationType"];
    }
    addNotification(notificationType) {
        const _notification = Object.assign({}, this.notification);
        if (!this.notification.title) {
            _notification.title = 'Title';
        }
        if (!this.notification.content) {
            _notification.content = 'Test Content';
        }
        switch (notificationType) {
            case b2p_notification_center__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].Error:
                this.notificationservice.error(_notification.title, _notification.content);
                break;
            case b2p_notification_center__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].Warning:
                this.notificationservice.warning(_notification.title, _notification.content);
                break;
            case b2p_notification_center__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].Info:
                this.notificationservice.info(_notification.title, _notification.content);
                break;
            default:
                this.notificationservice.success(_notification.title, _notification.content);
                break;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](b2p_notification_center__WEBPACK_IMPORTED_MODULE_1__["NotificationCenterService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 130, vars: 8, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket", "alt", "Rocket Ship", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#dd0031"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], ["id", "rocket-smoke", "alt", "Rocket Ship Smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], ["type", "hidden"], ["selection", ""], [1, "card-container"], ["tabindex", "0", 1, "card", "card-small", "color-success", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"], ["tabindex", "0", 1, "card", "card-small", "color-info", 3, "click"], ["tabindex", "0", 1, "card", "card-small", "color-warning", 3, "click"], ["tabindex", "0", 1, "card", "card-small", "color-error", 3, "click"], [1, "input-container"], [1, "field", "field_v2"], ["placeholder", "e.g. Notification title", 1, "field__input", 3, "ngModel", "ngModelChange"], [1, "field__label-wrap"], [1, "field__label"], ["placeholder", "e.g. This is a test content", 1, "field__input", 3, "ngModel", "ngModelChange"], [1, "terminal", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], ["title", "Animations", "href", "https://angular.io/guide/animations", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["id", "Group_20", "data-name", "Group 20", "xmlns", "http://www.w3.org/2000/svg", "width", "21.813", "height", "23.453", "viewBox", "0 0 21.813 23.453"], ["id", "Path_15", "data-name", "Path 15", "d", "M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z", "transform", "translate(-4088.702 -972.736)", "fill", "#ffa726"], ["id", "Path_16", "data-name", "Path 16", "d", "M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z", "transform", "translate(-4170.633 -972.736)", "fill", "#fb8c00"], ["id", "Path_17", "data-name", "Path 17", "d", "M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1058.315)", "fill", "#ffe0b2"], ["id", "Path_18", "data-name", "Path 18", "d", "M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1036.757)", "fill", "#fff3e0"], ["id", "Path_19", "data-name", "Path 19", "d", "M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1015.199)", "fill", "#fff"], ["title", "CLI", "href", "https://cli.angular.io/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular CLI Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "21.762", "height", "23.447", "viewBox", "0 0 21.762 23.447"], ["id", "Group_21", "data-name", "Group 21", "transform", "translate(0)"], ["id", "Path_20", "data-name", "Path 20", "d", "M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-2649.48 -313.618)", "fill", "#37474f"], ["id", "Path_21", "data-name", "Path 21", "d", "M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-2731.05 -313.618)", "fill", "#263238"], ["id", "Path_22", "data-name", "Path 22", "d", "M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z", "transform", "translate(-2687.274 -362.17)", "fill", "#fff"], ["id", "Path_23", "data-name", "Path 23", "d", "M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z", "transform", "translate(-2702.289 -380.631)", "fill", "#fff"], ["id", "Rectangle_12", "data-name", "Rectangle 12", "width", "3.517", "height", "0.469", "transform", "translate(9.709 13.744)", "fill", "#fff"], ["title", "Augury", "href", "https://augury.rangle.io/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular Augury Logo", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "21.81", "height", "23.447", "viewBox", "0 0 21.81 23.447"], ["id", "clip-path"], ["id", "Rectangle_13", "data-name", "Rectangle 13", "width", "10.338", "height", "10.27", "fill", "none"], ["id", "Group_25", "data-name", "Group 25", "transform", "translate(0)"], ["id", "Path_24", "data-name", "Path 24", "d", "M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-3769.274 -311.417)", "fill", "#4a3493"], ["id", "Path_25", "data-name", "Path 25", "d", "M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-3851.207 -311.417)", "fill", "#311b92"], ["id", "Group_24", "data-name", "Group 24", "transform", "translate(6.194 6.73)", "opacity", "0.5"], ["id", "Group_23", "data-name", "Group 23", "transform", "translate(0 0)"], ["id", "Group_22", "data-name", "Group 22", "clip-path", "url(#clip-path)"], ["id", "Path_26", "data-name", "Path 26", "d", "M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z", "transform", "translate(-3822.107 -368.821)", "fill", "#fff"], ["id", "Path_27", "data-name", "Path 27", "d", "M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z", "transform", "translate(-3814.311 -359.969)", "fill", "#fff"], ["title", "Protractor", "href", "https://www.protractortest.org/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular Protractor Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "21.81", "height", "23.447", "viewBox", "0 0 21.81 23.447"], ["id", "Group_26", "data-name", "Group 26", "transform", "translate(0)"], ["id", "Path_28", "data-name", "Path 28", "d", "M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-4609.274 -311.417)", "fill", "#e13439"], ["id", "Path_29", "data-name", "Path 29", "d", "M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-4691.207 -311.417)", "fill", "#b52f32"], ["id", "Path_30", "data-name", "Path 30", "d", "M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z", "transform", "translate(-4634.008 -355.852)", "fill", "#fff"], ["title", "Find a Local Meetup", "href", "https://www.meetup.com/find/?keywords=angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Meetup Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "24.607", "height", "23.447", "viewBox", "0 0 24.607 23.447"], ["id", "logo--mSwarm", "d", "M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z", "transform", "translate(0 0.123)", "fill", "#f64060"], ["title", "Join the Conversation on Gitter", "href", "https://gitter.im/angular/angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Gitter Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "19.447", "height", "19.447", "viewBox", "0 0 19.447 19.447"], ["id", "Group_40", "data-name", "Group 40", "transform", "translate(-1612 -405)"], ["id", "Rectangle_19", "data-name", "Rectangle 19", "width", "19.447", "height", "19.447", "transform", "translate(1612 405)", "fill", "#e60257"], ["id", "gitter", "transform", "translate(1617.795 408.636)"], ["id", "Group_33", "data-name", "Group 33", "transform", "translate(0 0)"], ["id", "Rectangle_15", "data-name", "Rectangle 15", "width", "1.04", "height", "9.601", "transform", "translate(2.304 2.324)", "fill", "#fff"], ["id", "Rectangle_16", "data-name", "Rectangle 16", "width", "1.04", "height", "9.601", "transform", "translate(4.607 2.324)", "fill", "#fff"], ["id", "Rectangle_17", "data-name", "Rectangle 17", "width", "1.04", "height", "4.648", "transform", "translate(6.91 2.324)", "fill", "#fff"], ["id", "Rectangle_18", "data-name", "Rectangle 18", "width", "1.04", "height", "6.971", "transform", "translate(0 0)", "fill", "#fff"], ["href", "https://github.com/angular/angular", "target", "_blank", "rel", "noopener"], [1, "github-star-badge"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z", "fill", "#1976d2"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Notification-center demo app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Show Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "What do you want to do next with your app?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_28_listener() { return ctx.addNotification(ctx.notificationType.Success); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_33_listener() { return ctx.addNotification(ctx.notificationType.Info); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_38_listener() { return ctx.addNotification(ctx.notificationType.Warning); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_43_listener() { return ctx.addNotification(ctx.notificationType.Error); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_50_listener($event) { return ctx.notification.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Notification title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_55_listener($event) { return ctx.notification.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Notification content:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AppComponent_pre_60_Template, 2, 0, "pre", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AppComponent_pre_61_Template, 2, 0, "pre", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AppComponent_pre_62_Template, 2, 0, "pre", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AppComponent_pre_63_Template, 2, 0, "pre", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AppComponent_pre_64_Template, 2, 0, "pre", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AppComponent_pre_65_Template, 2, 0, "pre", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "svg", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "g", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "rect", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "clipPath", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "rect", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "g", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "g", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "g", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "g", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "g", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "svg", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "svg", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "g", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "rect", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "g", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "rect", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "rect", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "rect", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "rect", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Love Angular?\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Give our repo a star. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Star ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "svg", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "b2p-notification-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.notification.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.notification.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", _r0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "pwa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dependency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "build");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], b2p_notification_center__WEBPACK_IMPORTED_MODULE_1__["NotificationCenterComponent"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n.color-error[_ngcontent-%COMP%] {\n  background: #CB0101;\n}\n.color-success[_ngcontent-%COMP%] {\n  background: #18BC18;\n}\n.color-warning[_ngcontent-%COMP%] {\n  background: #FFD800;\n}\n.color-info[_ngcontent-%COMP%] {\n  background: #0FAEED;\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n\n.field__input[_ngcontent-%COMP%] {\n  --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);\n  background-color: transparent;\n  border-radius: 0;\n  border: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  font-family: inherit;\n  font-size: inherit;\n}\n.field__input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n  color: var(--uiFieldPlaceholderColor);\n}\n.field__input[_ngcontent-%COMP%]:focus::-moz-placeholder {\n  color: var(--uiFieldPlaceholderColor);\n}\n\n.field[_ngcontent-%COMP%] {\n  --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);\n  --uiFieldPaddingRight: var(--fieldPaddingRight, 1rem);\n  --uiFieldPaddingLeft: var(--fieldPaddingLeft, 1rem);\n  --uiFieldBorderColorActive: var(--fieldBorderColorActive, rgba(22, 22, 22, 1));\n  display: var(--fieldDisplay, inline-flex);\n  position: relative;\n  font-size: var(--fieldFontSize, 1rem);\n}\n.field__input[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: var(--fieldWidth, 100%);\n  height: var(--fieldHeight, 3rem);\n  padding: var(--fieldPaddingTop, 1.25rem) var(--uiFieldPaddingRight) var(--fieldPaddingBottom, 0.5rem) var(--uiFieldPaddingLeft);\n  border-bottom: var(--uiFieldBorderWidth) solid var(--fieldBorderColor, rgba(0, 0, 0, 0.25));\n}\n.field__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.field__input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 0;\n  -webkit-transition: opacity 0.2s ease-out;\n  transition: opacity 0.2s ease-out;\n}\n.field__input[_ngcontent-%COMP%]::-moz-placeholder {\n  opacity: 0;\n  -moz-transition: opacity 0.2s ease-out;\n  transition: opacity 0.2s ease-out;\n}\n.field__input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n  opacity: 1;\n  transition-delay: 0.2s;\n}\n.field__input[_ngcontent-%COMP%]:focus::-moz-placeholder {\n  opacity: 1;\n  transition-delay: 0.2s;\n}\n.field__label-wrap[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  pointer-events: none;\n  cursor: text;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.field__label-wrap[_ngcontent-%COMP%]::after {\n  content: \"\";\n  box-sizing: border-box;\n  width: 100%;\n  height: 0;\n  opacity: 0;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.field__input[_ngcontent-%COMP%]:focus    ~ .field__label-wrap[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.field__label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--uiFieldPaddingLeft);\n  top: calc(50% - .5em);\n  line-height: 1;\n  font-size: var(--fieldHintFontSize, inherit);\n  transition: top 0.2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity 0.2s ease-out, font-size 0.2s ease-out;\n  will-change: bottom, opacity, font-size;\n}\n.field__input[_ngcontent-%COMP%]:focus    ~ .field__label-wrap[_ngcontent-%COMP%]   .field__label[_ngcontent-%COMP%], .field__input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ .field__label-wrap[_ngcontent-%COMP%]   .field__label[_ngcontent-%COMP%] {\n  --fieldHintFontSize: var(--fieldHintFontSizeFocused, .75rem);\n  top: var(--fieldHintTopHover, 0.25rem);\n}\n\n.field_v1[_ngcontent-%COMP%]   .field__label-wrap[_ngcontent-%COMP%]::after {\n  border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);\n  transition: opacity 0.2s ease-out;\n  will-change: opacity;\n}\n\n.field_v2[_ngcontent-%COMP%]   .field__label-wrap[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.field_v2[_ngcontent-%COMP%]   .field__label-wrap[_ngcontent-%COMP%]::after {\n  border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);\n  transform: translate3d(-105%, 0, 0);\n  will-change: transform, opacity;\n  transition: transform 0.285s ease-out 0.2s, opacity 0.2s ease-out 0.2s;\n}\n.field_v2[_ngcontent-%COMP%]   .field__input[_ngcontent-%COMP%]:focus    ~ .field__label-wrap[_ngcontent-%COMP%]::after {\n  transform: translate3d(0, 0, 0);\n  transition-delay: 0;\n}\n\n.field_v3[_ngcontent-%COMP%]   .field__label-wrap[_ngcontent-%COMP%]::after {\n  border: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);\n  will-change: opacity, height;\n  transition: height 0.2s ease-out, opacity 0.2s ease-out;\n}\n.field_v3[_ngcontent-%COMP%]   .field__input[_ngcontent-%COMP%]:focus    ~ .field__label-wrap[_ngcontent-%COMP%]::after {\n  height: 100%;\n}\n\n.field[_ngcontent-%COMP%] {\n  --fieldBorderColor: #D1C4E9;\n  --fieldBorderColorActive: #673AB7;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 480px;\n  margin: auto;\n  padding: 1rem;\n  display: grid;\n  grid-gap: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25vdGlmaWNhdGlvbi1jZW50ZXItZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSwwSkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBRUY7QUFDQTs7Ozs7O0VBTUUsYUFBQTtBQUVGO0FBQ0E7RUFDRSxTQUFBO0FBRUY7QUFDQTtFQUNFLE9BQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFFRjtBQUNBO0VBQ0UsaUJBQUE7QUFFRjtBQUNBO0VBQ0UsVUFBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7QUFFRjtBQUNBO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0FBRUY7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBO0VBQ0UsaUJBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFRjtBQUNBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7OztFQUdFLGNBQUE7RUFDQSxxQkFBQTtBQUVGO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSx3RUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7RUFDQSx1QkFBQTtBQUVGO0FBQ0E7RUFDRSwrQkFBQTtFQUNBLDJDQUFBO0FBRUY7QUFDQTtFQUNFLG1CQUFBO0FBRUY7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7QUFEQTtFQUNFLG1CQUFBO0FBSUY7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7QUFGQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUtGO0FBRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFLRjtBQUZBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwSUFBQTtBQUtGO0FBRkE7RUFDRSxnRUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFLRjtBQUZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUtGO0FBRkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUtGO0FBREEsc0JBQUE7QUFDQTtFQUVFOztJQUVFLFdBQUE7RUFHRjs7RUFBQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBR0Y7O0VBQUE7SUFDRSxpQkFBQTtFQUdGOztFQUFBO0lBQ0UsWUFBQTtJQUNBLHdCQUFBO0VBR0Y7QUFDRjtBQUFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUFFRjtBQUNGO0FBR0E7Ozs7Q0FBQTtBQU1BO0VBQ0UsZ0VBQUE7RUFFQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0VBQ0EscUJBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0FBTEY7QUFRQTtFQUNFLHFDQUFBO0FBTEY7QUFRQTtFQUNFLHFDQUFBO0FBTEY7QUFRQTs7OztDQUFBO0FBTUE7RUFDRSxrREFBQTtFQUNBLHFEQUFBO0VBQ0EsbURBQUE7RUFDQSw4RUFBQTtFQUVBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQVBGO0FBVUE7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrSEFBQTtFQUNBLDJGQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7QUFQRjtBQVVBO0VBQ0UsVUFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUFQRjtBQVVBO0VBQ0UsVUFBQTtFQUNBLHNDQUFBO0VBQUEsaUNBQUE7QUFQRjtBQVVBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FBUEY7QUFVQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQVBGO0FBVUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQVJGO0FBV0E7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBVEY7QUFZQTtFQUNFLFVBQUE7QUFURjtBQVlBO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBRUEsY0FBQTtFQUNBLDRDQUFBO0VBRUEsd0dBQUE7RUFDQSx1Q0FBQTtBQVhGO0FBY0E7O0VBRUUsNERBQUE7RUFFQSxzQ0FBQTtBQVpGO0FBZUE7O0NBQUE7QUFJQTtFQUNFLDhFQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtBQWJGO0FBZ0JBOztDQUFBO0FBSUE7RUFDRSxnQkFBQTtBQWRGO0FBaUJBO0VBQ0UsOEVBQUE7RUFDQSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0VBQUE7QUFkRjtBQWlCQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7QUFkRjtBQWlCQTs7Q0FBQTtBQUlBO0VBQ0UsdUVBQUE7RUFDQSw0QkFBQTtFQUNBLHVEQUFBO0FBZkY7QUFrQkE7RUFDRSxZQUFBO0FBZkY7QUFrQkE7Ozs7Q0FBQTtBQU1BO0VBQ0UsMkJBQUE7RUFDQSxpQ0FBQTtBQWhCRjtBQW1CQTs7OztDQUFBO0FBZUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUEzQkYiLCJmaWxlIjoicHJvamVjdHMvbm90aWZpY2F0aW9uLWNlbnRlci1kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMTtcbn1cblxuLnRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG9vbGJhciBpbWcge1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gIGZpbGw6ICM4ODg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcmQuY2FyZC1zbWFsbCB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2OHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuc3ZnI3JvY2tldCB7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0yNHB4O1xufVxuXG5zdmcjcm9ja2V0LXNtb2tlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTgwcHg7XG4gIHotaW5kZXg6IC0xMDtcbn1cblxuYSxcbmE6dmlzaXRlZCxcbmE6aG92ZXIge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxMjU2OTk7XG59XG5cbi50ZXJtaW5hbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcbiAgY29sb3I6ICNjMmMzYzQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAxNHB4IDA7XG4gIHRleHQtaW5kZW50OiA0cHg7XG59XG5cbi50ZXJtaW5hbCBwcmUge1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2lyY2xlLWxpbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG5cbi5jaXJjbGUtbGluazpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5jb2xvci1lcnJvciB7XG4gIGJhY2tncm91bmQ6ICNDQjAxMDE7XG59XG4uY29sb3Itc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICMxOEJDMTg7XG59XG4uY29sb3Itd2FybmluZyB7XG4gIGJhY2tncm91bmQ6ICNGRkQ4MDA7XG59XG4uY29sb3ItaW5mbyB7XG4gIGJhY2tncm91bmQ6ICMwRkFFRUQ7XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbmZvb3RlciBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgY29sb3I6ICMyNDI5MmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbnN2ZyNjbG91ZHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogLTE2MHB4O1xuICBsZWZ0OiAtMjMwcHg7XG4gIHotaW5kZXg6IC0xMDtcbiAgd2lkdGg6IDE5MjBweDtcbn1cblxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcbiAgLnRlcm1pbmFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgcmlnaHQ6IDEyMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG5cblxuLypcbj09PT09XG5SRVNFVCBTVFlMRVNcbj09PT09XG4qL1xuXG4uZmllbGRfX2lucHV0e1xuICAtLXVpRmllbGRQbGFjZWhvbGRlckNvbG9yOiB2YXIoLS1maWVsZFBsYWNlaG9sZGVyQ29sb3IsICM3Njc2NzYpO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmZpZWxkX19pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcbiAgY29sb3I6IHZhcigtLXVpRmllbGRQbGFjZWhvbGRlckNvbG9yKTtcbn1cblxuLmZpZWxkX19pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlcntcbiAgY29sb3I6IHZhcigtLXVpRmllbGRQbGFjZWhvbGRlckNvbG9yKTtcbn1cblxuLypcbj09PT09XG5DT1JFIFNUWUxFU1xuPT09PT1cbiovXG5cbi5maWVsZHtcbiAgLS11aUZpZWxkQm9yZGVyV2lkdGg6IHZhcigtLWZpZWxkQm9yZGVyV2lkdGgsIDJweCk7XG4gIC0tdWlGaWVsZFBhZGRpbmdSaWdodDogdmFyKC0tZmllbGRQYWRkaW5nUmlnaHQsIDFyZW0pO1xuICAtLXVpRmllbGRQYWRkaW5nTGVmdDogdmFyKC0tZmllbGRQYWRkaW5nTGVmdCwgMXJlbSk7XG4gIC0tdWlGaWVsZEJvcmRlckNvbG9yQWN0aXZlOiB2YXIoLS1maWVsZEJvcmRlckNvbG9yQWN0aXZlLCByZ2JhKDIyLCAyMiwgMjIsIDEpKTtcblxuICBkaXNwbGF5OiB2YXIoLS1maWVsZERpc3BsYXksIGlubGluZS1mbGV4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IHZhcigtLWZpZWxkRm9udFNpemUsIDFyZW0pO1xufVxuXG4uZmllbGRfX2lucHV0e1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogdmFyKC0tZmllbGRXaWR0aCwgMTAwJSk7XG4gIGhlaWdodDogdmFyKC0tZmllbGRIZWlnaHQsIDNyZW0pO1xuICBwYWRkaW5nOiB2YXIoLS1maWVsZFBhZGRpbmdUb3AsIDEuMjVyZW0pIHZhcigtLXVpRmllbGRQYWRkaW5nUmlnaHQpIHZhcigtLWZpZWxkUGFkZGluZ0JvdHRvbSwgLjVyZW0pIHZhcigtLXVpRmllbGRQYWRkaW5nTGVmdCk7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLXVpRmllbGRCb3JkZXJXaWR0aCkgc29saWQgdmFyKC0tZmllbGRCb3JkZXJDb2xvciwgcmdiYSgwLCAwLCAwLCAuMjUpKTtcbn1cblxuLmZpZWxkX19pbnB1dDpmb2N1c3tcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZpZWxkX19pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1vdXQ7XG59XG5cbi5maWVsZF9faW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXJ7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2Utb3V0O1xufVxuXG4uZmllbGRfX2lucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAuMnM7XG59XG5cbi5maWVsZF9faW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXJ7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb24tZGVsYXk6IC4ycztcbn1cblxuLmZpZWxkX19sYWJlbC13cmFwe1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiB0ZXh0O1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uZmllbGRfX2xhYmVsLXdyYXA6OmFmdGVye1xuICBjb250ZW50OiBcIlwiO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBvcGFjaXR5OiAwO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uZmllbGRfX2lucHV0OmZvY3VzIH4gLmZpZWxkX19sYWJlbC13cmFwOjphZnRlcntcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZpZWxkX19sYWJlbHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiB2YXIoLS11aUZpZWxkUGFkZGluZ0xlZnQpO1xuICB0b3A6IGNhbGMoNTAlIC0gLjVlbSk7XG5cbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZmllbGRIaW50Rm9udFNpemUsIGluaGVyaXQpO1xuXG4gIHRyYW5zaXRpb246IHRvcCAuMnMgY3ViaWMtYmV6aWVyKDAuOSwgLTAuMTUsIDAuMSwgMS4xNSksIG9wYWNpdHkgLjJzIGVhc2Utb3V0LCBmb250LXNpemUgLjJzIGVhc2Utb3V0O1xuICB3aWxsLWNoYW5nZTogYm90dG9tLCBvcGFjaXR5LCBmb250LXNpemU7XG59XG5cbi5maWVsZF9faW5wdXQ6Zm9jdXMgfiAuZmllbGRfX2xhYmVsLXdyYXAgLmZpZWxkX19sYWJlbCxcbi5maWVsZF9faW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiAuZmllbGRfX2xhYmVsLXdyYXAgLmZpZWxkX19sYWJlbHtcbiAgLS1maWVsZEhpbnRGb250U2l6ZTogdmFyKC0tZmllbGRIaW50Rm9udFNpemVGb2N1c2VkLCAuNzVyZW0pO1xuXG4gIHRvcDogdmFyKC0tZmllbGRIaW50VG9wSG92ZXIsIC4yNXJlbSk7XG59XG5cbi8qXG5lZmZlY3QgMVxuKi9cblxuLmZpZWxkX3YxIC5maWVsZF9fbGFiZWwtd3JhcDo6YWZ0ZXJ7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLXVpRmllbGRCb3JkZXJXaWR0aCkgc29saWQgdmFyKC0tdWlGaWVsZEJvcmRlckNvbG9yQWN0aXZlKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1vdXQ7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xufVxuXG4vKlxuZWZmZWN0IDJcbiovXG5cbi5maWVsZF92MiAuZmllbGRfX2xhYmVsLXdyYXB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5maWVsZF92MiAuZmllbGRfX2xhYmVsLXdyYXA6OmFmdGVye1xuICBib3JkZXItYm90dG9tOiB2YXIoLS11aUZpZWxkQm9yZGVyV2lkdGgpIHNvbGlkIHZhcigtLXVpRmllbGRCb3JkZXJDb2xvckFjdGl2ZSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwNSUsIDAsIDApO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI4NXMgZWFzZS1vdXQgLjJzLCBvcGFjaXR5IC4ycyBlYXNlLW91dCAuMnM7XG59XG5cbi5maWVsZF92MiAuZmllbGRfX2lucHV0OmZvY3VzIH4gLmZpZWxkX19sYWJlbC13cmFwOjphZnRlcntcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMDtcbn1cblxuLypcbmVmZmVjdCAzXG4qL1xuXG4uZmllbGRfdjMgLmZpZWxkX19sYWJlbC13cmFwOjphZnRlcntcbiAgYm9yZGVyOiB2YXIoLS11aUZpZWxkQm9yZGVyV2lkdGgpIHNvbGlkIHZhcigtLXVpRmllbGRCb3JkZXJDb2xvckFjdGl2ZSk7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCBoZWlnaHQ7XG4gIHRyYW5zaXRpb246IGhlaWdodCAuMnMgZWFzZS1vdXQsIG9wYWNpdHkgLjJzIGVhc2Utb3V0O1xufVxuXG4uZmllbGRfdjMgLmZpZWxkX19pbnB1dDpmb2N1cyB+IC5maWVsZF9fbGFiZWwtd3JhcDo6YWZ0ZXJ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLypcbj09PT09XG5MRVZFTCA0LiBTRVRUSU5HU1xuPT09PT1cbiovXG5cbi5maWVsZHtcbiAgLS1maWVsZEJvcmRlckNvbG9yOiAjRDFDNEU5O1xuICAtLWZpZWxkQm9yZGVyQ29sb3JBY3RpdmU6ICM2NzNBQjc7XG59XG5cbi8qXG49PT09PVxuREVNT1xuPT09PT1cbiovXG5cbi8vIGJvZHl7XG4vLyAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE9wZW4gU2FucywgVWJ1bnR1LCBGaXJhIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuLy8gICBtYXJnaW46IDA7XG5cbi8vICAgbWluLWhlaWdodDogMTAwdmg7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyB9XG5cbi5pbnB1dC1jb250YWluZXJ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDMwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: b2p_notification_center__WEBPACK_IMPORTED_MODULE_1__["NotificationCenterService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var b2p_notification_center__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! b2p-notification-center */ "HIqd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "nIj0");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            b2p_notification_center__WEBPACK_IMPORTED_MODULE_4__["NotificationCenterModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], b2p_notification_center__WEBPACK_IMPORTED_MODULE_4__["NotificationCenterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    b2p_notification_center__WEBPACK_IMPORTED_MODULE_4__["NotificationCenterModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map