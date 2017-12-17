import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {simpleDecorator,
  decoratorWithParam,
  decoratorReplaceConstructor,
  addProperty} from "../../core/decorators";

@addProperty
@simpleDecorator
export class Person{
  hello: string
  constructor(){}
}

const person1 = new Person()
console.log(person1.hello)

@Component({
  selector: 'calendar',
  template: '<section>Calendar section</section>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {
  private test: Person;

  constructor() {
    this.test = new Person()
  }

  ngOnInit() {
  }

}
