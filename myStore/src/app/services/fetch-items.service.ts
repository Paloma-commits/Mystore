import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchItemsService {

  item: Item = {
    id: 0,
    image: '',
    name: '',
    price: 0,
    quantity: 0
  }

  private data: string = "../assets/data.json"

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.data)

  }

  
}
