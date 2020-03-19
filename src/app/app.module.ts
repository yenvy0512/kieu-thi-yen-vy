import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { ProductService } from './product.service';
import { ProductAppComponent } from './product-app/product-app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, SlideComponent, CategoryComponent, ProductAppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
