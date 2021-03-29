import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire" 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderFinComponent } from './order-fin/order-fin.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ProductsAdminComponent } from './admin/products-admin/products-admin.component';
import { OrderAdminComponent } from './admin/order-admin/order-admin.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingComponent,
    CheckOutComponent,
    OrderFinComponent,
    MyOrderComponent,
    ProductsAdminComponent,
    OrderAdminComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
