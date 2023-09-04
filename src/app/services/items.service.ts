import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  // cdn temp
  public cdn = 'https://intype.pl/rarepepe/images/';

  //TEMPORARY ITEMS DATABASE
  public tempItemsData = [
    {
      title: 'Pole tytuł jest wymagane2',
      img_id: 111,
      user_id: 1234,
      votes_plus: 10,
      votes_minus: 5,
      category_id: 3
    },
    {
      title: 'Niedziela wieczur i humor popsuty',
      img_id: 222,
      user_id: 56,
      votes_plus: 100,
      votes_minus: 9,
      category_id: 1
    },
    {
      title: 'Admin rucha psa jak sra',
      img_id: 333,
      user_id: 56,
      votes_plus: 100,
      votes_minus: 9,
      category_id: 1
    }
  ];


  getItems(){
    //Podlaczyc sie do mongodb
    // pobrac itemy
    return this.tempItemsData;
  }

  prepareItems(count:number){
    var preparedItems:any = [];
    let cdnUrl = this.cdn;

    type PreparedItem = {
      title:string,
      user_id:number,
      user_data:any,
      image_data:any
    };

  let userData = (id:number) => {
    const result  = this.usersService.tempUsersData.filter((obj) => {
      return obj.id === id;
    });
    return result[0];
  }

  this.getItems().forEach(function (value) {
    if (count == preparedItems.length) return;

    const preparedItem: PreparedItem = {
      title: value.title,
      user_id: value.user_id,
      user_data: {
        username: userData(value.user_id).username,
        level: userData(value.user_id).level,
        class: userData(value.user_id).class,
        title: userData(value.user_id).title
      },
      image_data: {
        url: cdnUrl + value.img_id + '.jpg'
      }
    };
    preparedItems.push(preparedItem);
  });

  console.log('result' + preparedItems);
  return preparedItems;
  }


  constructor(public usersService:UsersService) {}
  }
