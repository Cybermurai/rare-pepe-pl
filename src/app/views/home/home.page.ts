import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {


  constructor(private itemsData:ItemsService, public usersData:UsersService) {}

  items = this.itemsData.prepareItems();


  ngOnInit() {}
}
