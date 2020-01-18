import { Component, OnInit } from '@angular/core';
import {ProductDetailsService } from '../product-details.service'


@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.scss']
})
export class DetailsContainerComponent implements OnInit {

  productDetailsData
  productVariantsData
  constructor(private productDetailsService : ProductDetailsService) { }
  ngOnInit() {

  this.productDetailsService.getProductDetails().subscribe(productDetailsData => {
    this.productDetailsData=productDetailsData['data']
  })
  this.productDetailsService.getProductVariants().subscribe(productVariants => {
    this.productVariantsData = productVariants
  })
  }

}
