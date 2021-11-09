import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/services/models/item';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item = {
    name: '',
    image: '',
    price: 0,
    quantity: 1,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
