import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/services/models/item';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FetchItemsService } from 'src/app/services/fetch-items.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item = {
    id: 0,
    name: "",
    image: "",
    price: 0,
    quantity: 1,
    description: ''
  }
  queryString : string = '';
  image: string = '';

  

  constructor(private router:Router, 
    private activatedRoute: ActivatedRoute, 
    private CartService: CartService,
    private FetchItemsService: FetchItemsService) { 
  }

  ngOnInit(): void {
    this.item.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));  
    this.item.name = String(this.activatedRoute.snapshot.paramMap.get('name')); 
    
    this.FetchItemsService.getItems().subscribe(res => {
      this.item = res.find(p => p.id === this.item.id) as unknown as Item;  
    });
  }
  

  backHome(){
    this.router.navigate(['/']);
  }

}
