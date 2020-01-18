import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product = {
    "content": [
        {
            "id": 21,
            "title": "Sky Gradient Glass Case Cover For Oppo Reno 2F 20",
            "subtitle": "BUY 2 FOR 2999",
            "image": "https://ik.imagekit.io/dailyobjects/product-images/designer-goods/dailyobjects/carry-all-pouches/dailyobjects-green-felt-carry-all-pouch-medium-images/DailyObjects-Green-Felt-Carry-all-Pouch-Medium.png?tr=w-476,q-80",
            "mrp": 1099.0,
            "price": 899.0,
            "costprice": null,
            "link": ""
        },
        {
            "id": 22,
            "title": "Sky Gradient Glass Case Cover For Oppo Reno 2F 21",
            "subtitle": "BUY 2 FOR 2999",
            "image": "https://ik.imagekit.io/dailyobjects/product-images/designer-cases/oppo/oppo-reno-2f/dailyobjects-sky-gradient-glass-case-cover-for-oppo-reno-2f-images/DailyObjects-Sky-Gradient-Glass-Case-Cover-For-Oppo-Reno-2F.png",
            "mrp": 1099.0,
            "price": 899.0,
            "costprice": null,
            "link": ""
        },
        {
            "id": 23,
            "title": "Sky Gradient Glass Case Cover For Oppo Reno 2F 22",
            "subtitle": "BUY 2 FOR 2999",
            "image": "https://ik.imagekit.io/dailyobjects/product-images/designer-goods/dailyobjects/carry-all-pouches/dailyobjects-green-felt-carry-all-pouch-medium-images/DailyObjects-Green-Felt-Carry-all-Pouch-Medium.png?tr=w-476,q-80",
            "mrp": 1099.0,
            "price": 899.0,
            "costprice": null,
            "link": ""
        },
        {
            "id": 24,
            "title": "Sky Gradient Glass Case Cover For Oppo Reno 2F 23",
            "subtitle": "BUY 2 FOR 2999",
            "image": "https://ik.imagekit.io/dailyobjects/product-images/designer-goods/dailyobjects/carry-all-pouches/dailyobjects-green-felt-carry-all-pouch-medium-images/DailyObjects-Green-Felt-Carry-all-Pouch-Medium.png?tr=w-476,q-80",
            "mrp": 1099.0,
            "price": 899.0,
            "costprice": null,
            "link": ""
        },
        {
            "id": 25,
            "title": "Sky Gradient Glass Case Cover For Oppo Reno 2F 25",
            "subtitle": "BUY 2 FOR 2999",
            "image": "https://ik.imagekit.io/dailyobjects/product-images/designer-goods/dailyobjects/carry-all-pouches/dailyobjects-green-felt-carry-all-pouch-medium-images/DailyObjects-Green-Felt-Carry-all-Pouch-Medium.png?tr=w-476,q-80",
            "mrp": 1099.0,
            "price": 899.0,
            "costprice": null,
            "link": ""
        }
    ],
    "pageable": {
        "sort": {
            "sorted": false,
            "unsorted": true,
            "empty": true
        },
        "pageNumber": 2,
        "pageSize": 10,
        "offset": 20,
        "unpaged": false,
        "paged": true
    },
    "last": true,
    "totalPages": 3,
    "totalElements": 25,
    "first": false,
    "number": 2,
    "sort": {
        "sorted": false,
        "unsorted": true,
        "empty": true
    },
    "numberOfElements": 5,
    "size": 10,
    "empty": false
};
  public products = [     {
    "id": 21,
    "title": "Sky Gradient Glass Case Cover For Oppo Reno 2F 20",
    "subtitle": "BUY 2 FOR 2999",
    "image": "https://ik.imagekit.io/dailyobjects/product-images/designer-goods/dailyobjects/carry-all-pouches/dailyobjects-green-felt-carry-all-pouch-medium-images/DailyObjects-Green-Felt-Carry-all-Pouch-Medium.png?tr=w-476,q-80",
    "mrp": 1099.0,
    "price": 899.0,
    "costprice": null,
    "link": ""
},
{
    "id": 22,
    "title": "Sky Gradient Glass Case Cover For Oppo Reno 2F 21",
    "subtitle": "BUY 2 FOR 2999",
    "image": "https://ik.imagekit.io/dailyobjects/product-images/designer-cases/oppo/oppo-reno-2f/dailyobjects-sky-gradient-glass-case-cover-for-oppo-reno-2f-images/DailyObjects-Sky-Gradient-Glass-Case-Cover-For-Oppo-Reno-2F.png",
    "mrp": 1099.0,
    "price": 899.0,
    "costprice": null,
    "link": ""
},
{
    "id": 23,
    "title": "Sky Gradient Glass Case Cover For Oppo Reno 2F 22",
    "subtitle": "BUY 2 FOR 2999",
    "image": "https://ik.imagekit.io/dailyobjects/product-images/designer-goods/dailyobjects/carry-all-pouches/dailyobjects-green-felt-carry-all-pouch-medium-images/DailyObjects-Green-Felt-Carry-all-Pouch-Medium.png?tr=w-476,q-80",
    "mrp": 1099.0,
    "price": 899.0,
    "costprice": null,
    "link": ""
},
{
    "id": 24,
    "title": "Sky Gradient Glass Case Cover For Oppo Reno 2F 23",
    "subtitle": "BUY 2 FOR 2999",
    "image": "https://ik.imagekit.io/dailyobjects/product-images/designer-goods/dailyobjects/carry-all-pouches/dailyobjects-green-felt-carry-all-pouch-medium-images/DailyObjects-Green-Felt-Carry-all-Pouch-Medium.png?tr=w-476,q-80",
    "mrp": 1099.0,
    "price": 899.0,
    "costprice": null,
    "link": ""
},
{
    "id": 25,
    "title": "Sky Gradient Glass Case Cover For Oppo Reno 2F 25",
    "subtitle": "BUY 2 FOR 2999",
    "image": "https://ik.imagekit.io/dailyobjects/product-images/designer-goods/dailyobjects/carry-all-pouches/dailyobjects-green-felt-carry-all-pouch-medium-images/DailyObjects-Green-Felt-Carry-all-Pouch-Medium.png?tr=w-476,q-80",
    "mrp": 1099.0,
    "price": 899.0,
    "costprice": null,
    "link": ""
}];

 // constructor(private _productService: ProductService) { }
  
  ngOnInit() {
   // this._productService.getProducts().subscribe(data => this.products = data.content);
  }
}