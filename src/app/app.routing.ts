import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";


const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		pathMatch: "full"
	},
	{
		path: "detail/:contactId",
		component: DetailComponent
	},
	{
		path: "cadastro",
		component: CadastroComponent
	},
	{
		path: "**",
		component: HomeComponent
	}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
