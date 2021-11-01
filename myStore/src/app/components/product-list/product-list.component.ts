import { Component, OnInit, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Item } from '../data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: Item[] = [{ name: '', price: 0}];

  
  constructor() { }

  ngOnInit(): void {

    this.items = [
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
