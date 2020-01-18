import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListingContainerComponent } from './listing-container/listing-container.component';
import { ListingRoutingModule } from './listing-routing.module';
import { SharedModule } from "../shared/shared.module";
import { ListingTitleComponent } from './listing-title/listing-title.component';
import { ListingStylesComponent } from './listing-styles/listing-styles.component';
import { ListingProductsComponent } from './listing-products/listing-products.component';
import { TitleIconListComponent } from './title-icon-list/title-icon-list.component';

@NgModule({
	declarations: [
		ListingContainerComponent,
		ListingTitleComponent,
		ListingStylesComponent,
		ListingProductsComponent,
		TitleIconListComponent,
	],
	imports: [
        ListingRoutingModule,
		CommonModule,
		SharedModule,
	],
	providers: [],
})
export class ListingModule {}