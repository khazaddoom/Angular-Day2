import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'This is a warning!';
  hideshow: boolean = true;

  constructor () {
    setTimeout(() => {

      this.hideshow = false;
      console.log('loaded!')

    }, 2000);
  }

  onbuttonclick() {
    if (this.hideshow) {
      this.hideshow = false;
    } else {
      this.hideshow = true;
    }
  }
}
