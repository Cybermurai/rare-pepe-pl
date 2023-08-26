import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPagesGuest = [
    { title: 'Pocieszalnia', url: '/home/', icon: 'home' },
    { title: 'Załóż nową piwnice', url: '/register/', icon: 'add' },
    { title: 'Schowaj się w piwnicy', url: '/login/', icon: 'log-in' }
  ];

  constructor() {}
}
