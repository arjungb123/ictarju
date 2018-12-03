import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { ApphomeComponent } from '../apphome/apphome.component';
import { AboutComponent } from '../about/about.component';
import { ContactusComponent } from '../contactus/contactus.component';


const routes:Routes= [
  {path:'',component:ApphomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
