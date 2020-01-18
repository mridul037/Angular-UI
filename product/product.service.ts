import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {  Observable } from 'rxjs';
import { IProduct } from './product';
import { environment } from '../../environments/environment';
const PRODUCTLIST = "lp/content"

const APIBASE = "https://demo6566885.mockable.io/"

@Injectable()
export class ProductService {
   private _url: string =environment.serverUrl+"/product?page=";

  constructor(private http: HttpClient) { }

  getProducts(page: number){
    return this.http.get(APIBASE + PRODUCTLIST);
  }
}
