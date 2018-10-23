import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineCardDetailsComponent } from './line-card-details/line-card-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HomePageComponent },
    { path: 'LineCards', component: LineCardDetailsComponent },
    { path: 'Products', component: ProductsDetailsComponent},
    { path: 'AboutUs', component: AboutUsPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}