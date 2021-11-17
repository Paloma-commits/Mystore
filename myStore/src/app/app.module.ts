import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CartSubItemComponent } from './components/cart-sub-item/cart-sub-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    CartComponent,
    ConfirmationComponent,
    ProductListComponent,
    HeaderComponent,
    CheckoutComponent,
    ItemDetailComponent,
    CartSubItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
