import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const PRODUCT_DETAILS = "dp/basic"
const PRODUCT_VARIANTS = "dp/variants"
const APIBASE = "https://demo6566885.mockable.io/"

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }
  getProductDetails(){
    return this.http.get(APIBASE + PRODUCT_DETAILS);
   }
   getProductVariants(){
    return this.http.get(APIBASE + PRODUCT_VARIANTS);
   }
}
