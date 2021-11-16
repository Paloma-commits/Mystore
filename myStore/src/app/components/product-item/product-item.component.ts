import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from '../../services/models/item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() item: Item;
  
  //@Output() quantity = new EventEmitter();

  quantity: number = 0;

  quantity_options = [0,1,2,3,4,5];
  

  constructor(private cartService: CartService) { 
    
    //initialize constructor in order to input the item from parent
    this.item = {
      id: 0,
      image: '',
      name: '',
      price: 0,
      quantity: 1
    }
  }

  ngOnInit(): void {
   console.log(this.item.quantity)
  }

  addQuantity(quant: any) {
    this.quantity = quant.target.value;
  }

  addProductToCart(item: Item): void {
    this.item.quantity = Number(this.quantity);    
    this.cartService.addtoCart(this.item);
  }

}
