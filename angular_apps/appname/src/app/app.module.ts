import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from'@angular/forms';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    ApphomeComponent,
    AboutComponent,
    MenuComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //class name of routing module
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
