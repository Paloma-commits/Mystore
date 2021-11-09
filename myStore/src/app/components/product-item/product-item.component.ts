import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from '../../services/models/item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() item: Item;
  @Output() itemAdded = new EventEmitter;

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

  addProductToCart(): void {
    this.cartService.addtoCart(this.item);
    alert(`${this.item.name} was added to your cart`);
  }

}
