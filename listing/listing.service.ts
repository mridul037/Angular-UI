import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const ProductListHeader = "lp/header "
const PRODUCTLIST = "lp/content"

const APIBASE = "https://demo6566885.mockable.io/"
@Injectable({
  providedIn: 'root'
})
export class ListingService {

  

  constructor(private http: HttpClient) {
   
   }
   getProductListHeader(){
    return this.http.get(APIBASE + ProductListHeader);
   }
   getproductList(){
    return this.http.get(APIBASE + PRODUCTLIST);
   }

}
