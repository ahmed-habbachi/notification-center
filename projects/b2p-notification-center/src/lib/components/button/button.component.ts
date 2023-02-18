/* eslint-disable @typescript-eslint/naming-convention */
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';

export const enum UI_BUTTON_VARIANTS {
  SIMPLE = 'simple',
  TOGGLE = 'toggle'
}

export const enum UI_BUTTON_STYLES {
  SOLID = 'solid',
  LINED = 'lined',
  ICON = 'icon'
}

export const enum UI_BUTTON_THEMES {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export const enum UI_BUTTON_ICON_STYLE {
  LIGHT = 'fal',
  REGULAR = 'far',
  SOLID = 'fas',
  BRANDS = 'fab'
}

export const enum UI_BUTTON_TOOLTIP_THEME {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export const enum UI_BUTTON_TOOLTIP_ORIENTATION {
  LEFT_BOTTOM = 'left-bottom',
  CENTER_BOTTOM = 'center-bottom',
  LEFT_MIDDLE = 'left-middle',
  RIGHT_MIDDLE = 'right-middle',
  CENTER_TOP = 'center-top',
}

export interface UiButtonConfig {
  buttonVariant?: string;
  buttonStyle?: string;
  buttonTheme?: string;
  buttonLabel?: string;
  iconStyle?: string;
  iconStyleActive?: string;
  iconName?: string;
  iconSVG?: string;
  iconNameActive?: string;
  iconSVGActive?: string;
  tooltip?: string;
  tooltipActive?: string;
  tooltipTheme?: string;
  tooltipOrientation?: string;
  active$?: BehaviorSubject<boolean | undefined>;
  clicked$?: Subject<never>;
  onClick?;
  onClick2?: (active: boolean) => void;
}

@Component({
  selector: 'b2p-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class B2PButtonComponent implements OnInit, OnDestroy {

  // PROPERTIES /////////////////////////////////////////////////////////////////////////////////////////////////////

  @Input() config: UiButtonConfig;
  @Input() badged: boolean | number;

  active = false;

  currentIconStyle: string;
  currentIconName: string;
  currentIconSVG: SafeHtml;
  currentTooltip: string;

  activeSubscription: Subscription;

  constructor(private domSanitizer: DomSanitizer) {}

  get isToggleButton(): boolean {
    return this.config.buttonVariant === UI_BUTTON_VARIANTS.TOGGLE;
  }

  public get isActive(): boolean {
    return this.active;
  }

  @Input()
  public set isActive(value: boolean) {
    if (value !== this.active) {
      this.toggleStatus({propagate: false});
    }
  }

  ngOnInit(): void {
    this.config.buttonVariant = this.config.buttonVariant || UI_BUTTON_VARIANTS.SIMPLE;
    this.config.buttonStyle = this.config.buttonStyle || UI_BUTTON_STYLES.LINED;
    this.config.buttonTheme = this.config.buttonTheme || UI_BUTTON_THEMES.PRIMARY;
    this.config.iconStyle = this.config.iconStyle || UI_BUTTON_ICON_STYLE.SOLID;
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
      this.config.active$ = new BehaviorSubject<boolean>(false);
    }

    // if (this.config.clicked$ === undefined) {
    // 	this.config.clicked$ = new Subject<never>();
    // }

    this.activeSubscription = this.config.active$.subscribe(active => {
      if (active !== undefined && active !== this.active) {
        this.toggleStatus({propagate: false});
      }
    });
  }

  ngOnDestroy(): void {
    if (this.activeSubscription) {
      this.activeSubscription.unsubscribe();
    }
  }

  // •◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦•◦

  toggleStatus({propagate = true} = {}): void {

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

  onClick(): void {

    if (this.config.clicked$) {

      this.config.clicked$.next();

      if (this.isToggleButton) {
        this.toggleStatus();
      }
    } else {

      if (this.isToggleButton) {
        this.toggleStatus();
      }
    }
  }

  wiggle(rem: number): boolean {
    return this.badged > 0 && ((+this.badged % 2) === rem) && !this.active;
  }
}
