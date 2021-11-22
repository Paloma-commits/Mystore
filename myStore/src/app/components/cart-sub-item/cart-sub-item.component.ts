import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/services/models/item';

@Component({
  selector: 'app-cart-sub-item',
  templateUrl: './cart-sub-item.component.html',
  styleUrls: ['./cart-sub-item.component.css']
})
export class CartSubItemComponent implements OnInit {

  @Input() prod: Item;
  @Output() newQ = new EventEmitter();

  quantity: number = 1;

  itemtotal:number = 0;

  constructor(private CartService: CartService) { 
    this.prod = {
      id: 0,
      image: '',
      name: '',
      price: 0,
      quantity: 1,
      description: ''
    }
  }

  ngOnInit(): void {
    this.quantity = this.prod.quantity;
    this.itemtotal = this.prod.quantity * this.prod.price;
  }

  remove(prod: Item){
    this.CartService.removeItem(this.prod)
  }

  editQuantity(q: number){
    if (q == 0) {
      this.CartService.removeItem(this.prod);
    }

    if(q > 0){
      this.CartService.updateQ(q, this.prod.id)
    }
    this.quantity = q;
    this.itemtotal = q * this.prod.price;
  }

}

