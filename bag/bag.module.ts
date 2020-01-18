import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BagContainerComponent } from './bag-container/bag-container.component';
import { BagRoutingModule } from './bag-routing.module'
import { SharedModule } from "../shared/shared.module";
import { BagDetailsComponent } from './bag-details/bag-details.component';

@NgModule({
	declarations: [
		BagContainerComponent,
		BagDetailsComponent,
	],
	imports: [
        BagRoutingModule,
		CommonModule,
		SharedModule
	],
	providers: [],
})
export class BagModule {}