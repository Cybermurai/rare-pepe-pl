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
      rank: 1
    },
    {
      id: 56,
      username: 'Kepysztys',
      rank: 5
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
