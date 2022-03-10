import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunesDepartementComponent } from './communes-departement/communes-departement.component';
import { DepartementRegionComponent } from './departement-region/departement-region.component';
import { DepartmentsComponent } from './departments/departments.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [
  {path:'', component: RegionComponent},
  {path:'regions/:code/departements', component: DepartementRegionComponent},
  {path:'regions/:code/departements/:codeDpt/communes', component: CommunesDepartementComponent},
  {path:'departements', component: DepartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
