import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from '../../services/models/item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() item: Item;

  quantity: number = 1;

  constructor(private cartService: CartService) { 
    
    //initialize constructor in order to input the item from parent
    this.item = {
      image: '',
      name: '',
      price: 0,
      quantity: 1
    }
  }

  ngOnInit(): void {
   
  }

  add(item: Item): void {
    this.cartService.addtoCart(item);
  }

}
