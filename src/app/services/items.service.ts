import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  //TEMPORARY ITEMS DATABASE
  public tempItemsData = [
    {
      title: 'Pole tytuł jest wymagane2',
      img_id: 1,
      user_id: 1234,
      votes_plus: 10,
      votes_minus: 5,
      category_id: 3
    },
    {
      title: 'Niedziela wieczur i humor popsuty',
      img_id: 2222,
      user_id: 56,
      votes_plus: 100,
      votes_minus: 9,
      category_id: 1
    }
  ];


  getItems(){
    return this.tempItemsData;
  }

  prepareItems(){
    type preparedItem = {
    title:string,
    user_id:number,
    user_data:any
  };

  var preparedItems:any = [];

  let userName = (id:number) => {
    const result  = this.usersService.tempUsersData.filter((obj) => {
      return obj.id === id;
    });
    return result[0];
  }

  this.tempItemsData.forEach(function (value) {
    const preparedItem: preparedItem = {
      title: value.title,
      user_id: value.user_id,
      user_data: {
        username: userName(value.user_id).username
      }
    };
    preparedItems.push(preparedItem);
  });

  console.log(preparedItems);
  return preparedItems;
}


  constructor(public usersService:UsersService) { 

   var usr = usersService.getUser(56);
  }
  }
