import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public tempItemsData = [
    {
      title: 'Pole tytuł jest wymagane',
      img_id: 1,
      user_id: 11,
      votes_plus: 10,
      votes_minus: 5,
      category_id: 3
    },
    {
      title: 'Niedziela wieczur i humor popsuty',
      img_id: 3,
      user_id: 56,
      votes_plus: 100,
      votes_minus: 9,
      category_id: 1
    }
  ];

  getItems(){
    return this.tempItemsData;
  }


  constructor() { }
}
