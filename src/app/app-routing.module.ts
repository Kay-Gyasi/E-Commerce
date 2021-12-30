import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { LoginComponent } from './components/login/login.component';
import { ItemListComponent } from './components/payment/item-list.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path:"cart", component:CartComponent},
  {path:"login", component:LoginComponent},
  {path:"pay", component:ItemListComponent},
  {path:"register", component:RegisterComponent},
  {path:"item-detail/:id", component:ItemDetailComponent},
  {path: '**', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
