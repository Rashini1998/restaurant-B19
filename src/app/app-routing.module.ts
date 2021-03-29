import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderAdminComponent } from './admin/order-admin/order-admin.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductsAdminComponent } from './admin/products-admin/products-admin.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderFinComponent } from './order-fin/order-fin.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingComponent } from './shopping/shopping.component';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: 'checkout',
    component: CheckOutComponent
  },
  {
    path: 'order-fin',
    component: OrderFinComponent
  },
  {
    path: 'admin/products',
    component: ProductsAdminComponent
  },
  {
    path: 'admin/orders',
    component: OrderAdminComponent
  },
  {
    path: 'admin/products/new',
    component: ProductFormComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
