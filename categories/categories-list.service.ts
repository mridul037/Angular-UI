import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


const CATEGORYLIST = "cl"

const APIBASE = "https://demo6566885.mockable.io/"

@Injectable({
  providedIn: 'root'
})
export class CategoriesListService {

  constructor(private http: HttpClient) { }
  getCategoriesList(){
    return this.http.get(APIBASE + CATEGORYLIST);
   }
}
