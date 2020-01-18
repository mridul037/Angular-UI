import { NgModule } from '@angular/core';
import { ProductListingComponent } from '../product-listing/product-listing.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		component: ProductListingComponent,
    },
   
	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule { }
