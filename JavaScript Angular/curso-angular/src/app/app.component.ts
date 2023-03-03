import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // app-component.html
  userName = "Baku-Stark"

  userData = {
    email:"baku-stark@admin.com",
    role:"Admin"
  }

  title = 'curso-angular';
}
