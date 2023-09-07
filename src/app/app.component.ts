import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPagesGuest = [
    { title: 'Pocieszalnia', url: '/home/', icon: 'home' },
    { title: 'Załóż nową piwnice', url: 'auth/register/', icon: 'add' },
    { title: 'Schowaj się w piwnicy', url: 'auth/login/', icon: 'log-in' }
  ];

  constructor() {}
}
