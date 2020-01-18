import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listing-products',
  templateUrl: './listing-products.component.html',
  styleUrls: ['./listing-products.component.scss']
})
export class ListingProductsComponent implements OnInit {
  @Input() listingProductData: object
  constructor() { }

  ngOnInit() {
  }

}
