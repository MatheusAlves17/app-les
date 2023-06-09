import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { PurchaseResumeComponent } from './pages/purchase-resume/purchase-resume.component';
import { MyPurchaseComponent } from './pages/my-purchase/my-purchase.component';
import { DevolutionComponent } from './pages/devolution/devolution.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { AddressComponent } from './pages/address/address.component';
import { EditAddressComponent } from './pages/edit-address/edit-address.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { NewAddressComponent } from './pages/new-address/new-address.component';
import { CardComponent } from './pages/card/card.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { NewCardComponent } from './pages/new-card/new-card.component';
import { EditCardComponent } from './pages/edit-card/edit-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { SalesComponent } from './pages/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupFormComponent,
    SignupComponent,
    MessagesComponent,
    ProductDetailsComponent,
    CartComponent,
    PurchaseComponent,
    PurchaseResumeComponent,
    MyPurchaseComponent,
    DevolutionComponent,
    ProfileComponent,
    EditProfileComponent,
    AddressComponent,
    EditAddressComponent,
    AddressFormComponent,
    NewAddressComponent,
    CardComponent,
    CardFormComponent,
    NewCardComponent,
    EditCardComponent,
    ProductsComponent,
    ProductFormComponent,
    NewProductComponent,
    EditProductComponent,
    SalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
