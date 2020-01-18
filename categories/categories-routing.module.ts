import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoriesContainerComponent } from './categories-container/categories-container.component';

const routes: Routes = [
	{
		path: "",
		component: CategoriesContainerComponent,
	}
	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CategoriesRoutingModule {}