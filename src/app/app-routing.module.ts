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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'produto/:id', component: ProductDetailsComponent},
  {path: 'carrinho', component: CartComponent},
  {path: 'compra', component: PurchaseComponent},
  {path: 'resumo', component: PurchaseResumeComponent},
  {path: 'minhas-compras', component: MyPurchaseComponent},
  {path: 'devolucao/:id', component: DevolutionComponent},
  {path: 'perfil/:id', component: ProfileComponent},
  {path: 'editar-perfil/:id', component: EditProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
