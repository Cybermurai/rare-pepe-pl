import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  public tempData = [
    { title: 'Jeden', url: '/home/', icon: 'home' },
    { title: 'Dwa', url: '/register/', icon: 'add' },
    { title: 'Trzy', url: '/login/', icon: 'log-in' }
  ];

  constructor() {}

  ngOnInit() {}

}
