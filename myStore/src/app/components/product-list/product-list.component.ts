import { Component, OnInit, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Item } from '../data';
import { FetchItemsService } from 'src/app/services/fetch-items.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: Item[] = [];

  
  constructor(private FetchItemservice: FetchItemsService) { }

  ngOnInit(): void {

    this.items = [
      {
        image: 'backpack.jpg',
        name: 'backpack',
        price: 65
      },
      {
        image: 'headphones.jpg',
        name: 'headphones',
        price: 359
      },
      {
        image: 'waterbottle.jpg',
        name: 'waterbottle',
        price: 25.99
      },
      {
        image: 'sunglasses.jpg',
        name: 'sunglasses',
        price: 140
      },
      {
        image: 'sunscreen.jpg',
        name: 'sunscreen',
        price: 12
      },
      {
        image: 'watch.jpg',
        name: 'watch',
        price: 200
      }
    ]

    // this.FetchItemservice.getItems().subscribe(res => {

    // });

  }

}
