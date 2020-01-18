import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service'


@Component({
  selector: 'app-listing-container',
  templateUrl: './listing-container.component.html',
  styleUrls: ['./listing-container.component.scss']
})
export class ListingContainerComponent implements OnInit {
  listingTitleData = {}
  ProductListHeaderData={}
  productListData={}
  listingTitleDataFetched:boolean
  productListDataFetched:boolean

 
 

        titleIconListData = {
          "comment": "Listing Page Header API",
          
              
              "styles": [
                {
                  "active":true,
                  "image": "https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/glass-case.png?tr=f-png",
                  "title": "WALLET CASE COVER ",
                  "link": "",
                  "color":{
                             "text": "",
                             "background": ""
                  }
                },
        {
                  "active":false,
                  "image": "https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/clear-case.png?tr=f-png",
                  "title": "PHONE GRIPPER",
                  "link": "",
                  "color":{
                    "text": "",
                    "background": ""
         }
                },
        {
                  "active":false,
                  "image": "https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/holographic-glass-case.png?tr=f-png",
                  "title": "CABLE PROTECTOR",
                  "link": "",
                  "color":{
                    "text": "",
                    "background": ""
         }
                },
        {
                  "active":false,
                  "image": "https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/mirror-case.png?tr=f-png",
                  "title": "AIRPODS CASE COVER",
                  "link": "",
                  "color":{
                    "text": "",
                    "background": ""
         }
                },
        {
                  "active":false,
                  "image": "https://ik.imagekit.io/dailyobjects/assets/images/product-page/filters/cases/leather-wallet-case.png?tr=f-png",
                  "title": "CABLES & WRAPS",
                  "link": "",
                  "color":{
                    "text": "",
                    "background": ""
         }
                }
              ]
            }
        

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.listingService.getProductListHeader().subscribe(ProductListHeaderData => {
      this.listingTitleDataFetched=true
      this.ProductListHeaderData=ProductListHeaderData;
      this.listingTitleData['title']=ProductListHeaderData['data']['title']
      this.listingTitleData['action']=ProductListHeaderData['data']['action']

    })
    this.listingService.getproductList().subscribe(productListData => {
      this.productListDataFetched=true
      this.productListData=productListData
    })
  }

}
