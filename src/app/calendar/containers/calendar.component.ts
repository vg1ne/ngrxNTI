import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'calendar',
  template: '<section>Calendar section</section>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
