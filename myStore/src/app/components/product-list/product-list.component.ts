import { Component, OnInit, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Item } from '../../services/models/item';
import { FetchItemsService } from 'src/app/services/fetch-items.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: Item[] = [];

  
  constructor(private FetchItemservice: FetchItemsService,
    private CartService: CartService) { }

  ngOnInit(): void {
  
    this.FetchItemservice.getItems().subscribe(res => {
      this.items = res
    });

  }

  // addProductToCart(item: Item) {
  //   this.CartService.addtoCart(this.item);
  //   window.alert(`You just added our product: ${item.name}!`);
  // }

}
