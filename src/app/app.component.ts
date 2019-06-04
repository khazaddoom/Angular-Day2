import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string = '';
  isDisabled: boolean = true;

  resetusername() {
    this.username = '';
  }

  isdisabled() {
    if (this.username != null) {
      return false;
      
    } else {
      return true;
    }
  }

  // title: string = 'This is a warning!';
  // hideshow: boolean = true;
  // somevalue: string = 'Type something here...';

  // constructor () {
  //   setTimeout(() => {

  //     this.hideshow = false;
  //     console.log('loaded!')

  //   }, 2000);
  // }

  // onbuttonclick() {
  //   if (this.hideshow) {
  //     this.hideshow = false;
  //   } else {
  //     this.hideshow = true;
  //   }
  // }

  // oninput(event: Event) {

  //   this.somevalue = (<HTMLInputElement>event.target).value;

  // }

}
