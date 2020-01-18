import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsContainerComponent } from './details-container/details-container.component';
import { DetailsRoutingModule } from './details-routing.module';
import { SharedModule } from "../shared/shared.module";
import { DetailsMobileImageSliderComponent } from './details-mobile-image-slider/details-mobile-image-slider.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { DetailOfferComponent } from './detail-offer/detail-offer.component';
import { DetailStyleSelectorComponent } from './detail-style-selector/detail-style-selector.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { DetailAddToCartComponent } from './detail-add-to-cart/detail-add-to-cart.component';


@NgModule({
	declarations: [
		DetailsContainerComponent,
		DetailsMobileImageSliderComponent,
		DetailInfoComponent,
		DetailOfferComponent,
		DetailStyleSelectorComponent,
		DetailAddToCartComponent,
	],
	imports: [
        DetailsRoutingModule,
		CommonModule,
		SharedModule,
		NgxYoutubePlayerModule.forRoot()
	],
	providers: [],
})
export class DetailsModule {}