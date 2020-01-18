import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from "../shared/shared.module";

@NgModule({
	declarations: [
		HomeContainerComponent,
	],
	imports: [
        HomeRoutingModule,
		CommonModule,
		SharedModule,
	],
	providers: [],
})
export class HomeModule {}