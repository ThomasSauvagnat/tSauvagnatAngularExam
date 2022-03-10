import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { RegionComponent } from './region/region.component';
import { DepartementRegionComponent } from './departement-region/departement-region.component';
import { CommunesDepartementComponent } from './communes-departement/communes-departement.component';
import { DepartmentsComponent } from './departments/departments.component';
import { InputDepartmentComponent } from './input-department/input-department.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegionComponent,
    DepartementRegionComponent,
    CommunesDepartementComponent,
    DepartmentsComponent,
    InputDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
