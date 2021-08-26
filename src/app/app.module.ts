import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { SlidesComponent } from './components/home/slides/slides.component';
import { CardslidesComponent } from './components/home/cardslides/cardslides.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlpComponent } from './components/plp/plp.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './components/home/home.component';
import { ProductdpComponent } from './components/productdp/productdp.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    SlidesComponent,
    CardslidesComponent,
    FooterComponent,
    PlpComponent,
    HomeComponent,
    ProductdpComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
     NgxPaginationModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
