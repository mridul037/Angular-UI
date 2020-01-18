import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing/product-routing.module';
import{InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ProductGridComponent } from './product-grid/product-grid.component';

@NgModule({
  declarations: [ProductListingComponent, ProductGridComponent],
  imports: [
    ProductRoutingModule,
    CommonModule,
    SharedModule,
    ScrollingModule,
    InfiniteScrollModule
  ]
})
export class ProductModule { }
