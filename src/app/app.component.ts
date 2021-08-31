import { Component, LOCALE_ID } from '@angular/core';
import { MyDecorator } from './decorators';
import localeEN from '@angular/common/locales/en';
import localezhHans from '@angular/common/locales/zh-Hans';



@MyDecorator({
  message: 'billi'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: LOCALE_ID, useValue: "en-US" },
  ]
})
export class AppComponent {
  counter = 0;

  dateTime = new Date();
  timerId = undefined;

  abc() {
    console.log('india');

  }

  ngOnInit() {
    //   setInterval(() => {
    //     this.counter++;
    //     this.dateTime = new Date();
    //   }, 1000);
  }

  onCounterUpdate(action: string) {
    if (action === '+') {
      this.counter++;
    } else {
      this.counter--;
    }

  }

  onCounterAutoUpdate(action: string) {
    console.log('first' + this.timerId);


    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = undefined;
      return;
    }


    if (action === '+') {
      // debugger
      this.timerId = setInterval(() => {
        this.counter++;
      }, 1000)
    } else {
      // debugger

      this.timerId = setInterval(() => {
        this.counter--;
      }, 1000)
    }
    console.log(this.timerId);

  }
}


