import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Item } from '../../services/models/item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() item: Item;

  quantity: number = 0;

  constructor() { 
    
    //initialize constructor in order to input the item from parent
    this.item = {
      image: '',
      name: '',
      price: 0
    }
  }

  ngOnInit(): void {
   
  }

  add(): void {
    this.quantity += 1
  }

  remove(): void {
    this.quantity -= 1
  }

}
