import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchItemsService {

  constructor() { }

  getItems(){
    return [
      {
        name: 'backpack',
        price: 89
      },
      {
        name: 'headphones',
        price: 259
      }
    ]
  }
}
