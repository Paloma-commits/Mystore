import { Component, OnInit } from '@angular/core';
import { Item } from '../data';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  itemList: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.itemList = [
      {
        name: 'Backpack',
        price: 50
      },
      {
        name: 'headphones',
        price: 259.99
      },
      {
        name: 'Jeans',
        price: 89
      }
    ]
  }

}
