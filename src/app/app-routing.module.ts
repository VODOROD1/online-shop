import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { ProductsComponent } from './components/products/products.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductResolver } from './services/product.resolver';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent, resolve: {data: ProductResolver} },
  { path: 'basket', component: BasketComponent },
  { path: 'base', component: BaseComponent },
  { path: 'admin',
    canActivate: [
      AuthGuard
    ],
    canDeactivate: [
      AuthGuard
    ],
    loadChildren: () => {
      return import('./components/admin/admin.module').then(m => {
        return m.AdminModule;
      })
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}