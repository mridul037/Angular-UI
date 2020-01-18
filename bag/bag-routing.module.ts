
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BagContainerComponent } from './bag-container/bag-container.component';

const routes: Routes = [
	{
		path: "",
		component: BagContainerComponent,
	}
	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BagRoutingModule {}