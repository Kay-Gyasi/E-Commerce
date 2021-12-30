import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LocalStorageService } from './services/localStorage.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { ItemsService } from './services/items.service';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemListComponent } from './components/payment/item-list.component';
import { reducers } from './state/store/reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/effects/dashboard.effects';
import { FlutterwaveModule } from 'flutterwave-angular-v3';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ItemCardComponent,
    ItemDetailComponent,
    ItemListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    FlutterwaveModule
  ],
  providers: [LocalStorageService, AlertifyService, AuthService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
