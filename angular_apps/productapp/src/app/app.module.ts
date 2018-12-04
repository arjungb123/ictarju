import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PmoduleModule} from './pmodule/pmodule.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    PmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
