import {RouterModule, Routes} from '@angular/router';

import {EmployeAddComponent} from './employe-add/employe-add.component';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {NgModule} from '@angular/core';
import {EmployeDeleteComponent} from './employe-delete/employe-delete.component';
import {EmployeUpdateComponent} from './employe-update/employe-update.component';
import {DepartementListComponent} from './departement-list/departement-list.component';
import {DepartementAddComponent} from './departement-add/departement-add.component';
import {DepartementUpdateComponent} from './departement-update/departement-update.component';
import {DepartementsDeleteComponent} from './departements-delete/departements-delete.component';


const APP_ROUTING: Routes = [
  {path: 'add/employe', component: EmployeAddComponent},
  {path: 'add/departement', component: DepartementAddComponent},
  {path: 'list', component: EmployeListComponent},
  {path: 'list/departements', component: DepartementListComponent},
  {path: 'list/employee/delete/:id', component: EmployeDeleteComponent},
  {path: 'list/employee/update/:id', component: EmployeUpdateComponent},
  {path: 'list/departement/delete/:id', component: DepartementsDeleteComponent},
  {path: 'list/departement/update/:id', component: DepartementUpdateComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export const ROUTING = RouterModule.forRoot(APP_ROUTING);




