import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    details: String = 'Secret Password = tuna';
    displayTrue = false;
    log = [];
    clicks = 0;

    toggleDetails() {
        if (!this.displayTrue) {
            this.displayTrue = true;
        } else {
            this.displayTrue = false;
        }

        this.clicks++;
        this.log.push(this.clicks);
    }
}
