import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsContainerComponent } from './details-container/details-container.component';


const routes: Routes = [
	{
		path: "",
		component: DetailsContainerComponent,
	}
	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DetailsRoutingModule {}