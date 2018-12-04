import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { ProductListComponent } from '../components/product-list/product-list.component';
import { AddproductComponent } from '../addproduct/addproduct.component';


const routes:Routes=[
  {path:'',component:ProductListComponent},
  {path:'add',component:AddproductComponent}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class PmoduleModule { }
