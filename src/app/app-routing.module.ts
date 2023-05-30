import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
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
import { NewAddressComponent } from './pages/new-address/new-address.component';
import { CardComponent } from './pages/card/card.component';
import { NewCardComponent } from './pages/new-card/new-card.component';
import { EditCardComponent } from './pages/edit-card/edit-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'produto/:id', component: ProductDetailsComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'compra/:id', component: PurchaseComponent },
  { path: 'resumo/:id', component: PurchaseResumeComponent },
  { path: 'minhas-compras/:id', component: MyPurchaseComponent },
  { path: 'devolucao/:id', component: DevolutionComponent },
  { path: 'perfil/:id', component: ProfileComponent },
  { path: 'editar-perfil/:id', component: EditProfileComponent },
  { path: 'enderecos/:id', component: AddressComponent },
  { path: 'editar-endereco/:id', component: EditAddressComponent },
  { path: 'novo-endereco/:id', component: NewAddressComponent },
  { path: 'cartoes/:id', component: CardComponent },
  { path: 'novo-cartao/:id', component: NewCardComponent },
  { path: 'editar-cartao/:id', component: EditCardComponent },
  { path: 'produtos/:id', component: ProductsComponent },
  { path: 'novo-produto/:id', component: NewProductComponent },
  { path: 'editar-produto/:id', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
