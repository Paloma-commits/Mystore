import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../components/data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchItemsService {

  constructor(private http: HttpClient) { }

  getItems(): Observable <[]> {
    return this.http.get<[]> ("https://jsonplaceholder.typicode.com/photos?_limit=8") 

  }
}
