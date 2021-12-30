import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

constructor(private http:HttpClient) { }

private readonly apiurl = "https://localhost:7164/api/"

getItems():Observable<Item[]>{
  /* return this.http.get<Item[]>('app/data/items.json').pipe(
    map(data => {
      const itemArray:Array<Item> = [];

      for(const id in data){
        if(data.hasOwnProperty(id) && data[id].categoryName === category){
          itemArray.push(data[id])
        }
      }
      return itemArray;
    })
  ) */

  // && data[id].categoryName === category
  return this.http.get<Item[]>(this.apiurl+"Product/GetProducts").pipe(
    map(data => {
      const itemArray:Array<Item> = [];

      for(const id in data){
        if(data.hasOwnProperty(id)){
          itemArray.push(data[id])
        }
      }
      return itemArray;
    })
  )
}

}
