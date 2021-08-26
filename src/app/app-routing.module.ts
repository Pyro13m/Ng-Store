import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductdpComponent } from './components/productdp/productdp.component';
import { HomeComponent } from './components/home/home.component';
import { PlpComponent } from './components/plp/plp.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-page',
    component: PlpComponent,
  },
  {
    path:'product-page/product-det',
    component: ProductdpComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [PlpComponent];
