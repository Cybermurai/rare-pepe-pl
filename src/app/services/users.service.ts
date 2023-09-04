import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //TEMPORARY USERS DATABASE
  public tempUsersData = [
    {
      id: 1234,
      username: 'Andrzeju2137',
      level: 2137,
      class: 'Papież Polak',
      title: 'Habemus papam'
    },
    {
      id: 56,
      username: 'Kepysztys',
      level: 222,
      class: 3,
      title: 4
    },
  ];

  getUsers(){
    return this.tempUsersData;
  }

  getUser(id:number){
    const result  = this.tempUsersData.filter((obj) => {
      return obj.id === id;
    });
    return result[0];
  }

  constructor() { }
}
