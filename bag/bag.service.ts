import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const SHOPPING_BAG = "bag/content"
const APIBASE = "https://demo6566885.mockable.io/"

@Injectable({
  providedIn: 'root'
})
export class BagService {

  constructor(private http: HttpClient) { }
  getBagData(){
    return this.http.get(APIBASE + SHOPPING_BAG);
   }
}
