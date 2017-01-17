import { Component, OnInit, Input, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';
import { Options } from 'fullcalendar';
import * as jQuery from 'jquery';
import * as  fullCalendar from 'fullcalendar';
@Component({
  selector: 'angular2-fullcalendar',
  template: require('./fullcalendar.component.html'),
  styles: [
    require('./fullcalendar.component.scss')
  ],
  encapsulation: ViewEncapsulation.None
})
export class Angular2fullCalendar implements AfterViewInit {
  @Input() private options: Options;
  private el: ElementRef;
  constructor(
    ElementRef: ElementRef
  ) {
    this.el = ElementRef;
  }

  /**
   * fullcalendar - init by service
   */
  fullcalendar(ElementRef: ElementRef, options: Options): void {
    if (options && ElementRef) {
      jQuery(ElementRef.nativeElement).fullCalendar(options);
    } else {
      throw(`Specify Fullcalendar options`);
    }
  }

  ngAfterViewInit(): void {
    this.fullcalendar(this.el, this.options);
  }
}