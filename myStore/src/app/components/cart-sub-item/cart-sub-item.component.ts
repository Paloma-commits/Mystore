import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/services/models/item';

@Component({
  selector: 'app-cart-sub-item',
  templateUrl: './cart-sub-item.component.html',
  styleUrls: ['./cart-sub-item.component.css']
})
export class CartSubItemComponent implements OnInit {

  @Input() prod: Item;

  constructor(private CartService: CartService) { 
    this.prod = {
      id: 0,
      image: '',
      name: '',
      price: 0,
      quantity: 1
    }
  }

  ngOnInit(): void {
  }

  remove(prod: Item){
    this.CartService.removeItem(this.prod)
  }

}