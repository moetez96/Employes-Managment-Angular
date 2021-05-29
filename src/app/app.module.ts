import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeAddComponent } from './employe-add/employe-add.component';
import {HttpClientModule} from '@angular/common/http';
import {ROUTING} from './app-routing.module';
import { EmployeDeleteComponent } from './employe-delete/employe-delete.component';
import { EmployeUpdateComponent } from './employe-update/employe-update.component';
import { DepartementAddComponent } from './departement-add/departement-add.component';
import { DepartementUpdateComponent } from './departement-update/departement-update.component';
import { DepartementsDeleteComponent } from './departements-delete/departements-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeListComponent,
    DepartementListComponent,
    EmployeAddComponent,
    EmployeDeleteComponent,
    EmployeUpdateComponent,
    DepartementAddComponent,
    DepartementUpdateComponent,
    DepartementsDeleteComponent
  ],
  imports: [
    BrowserModule,
    ROUTING, HttpClientModule, ReactiveFormsModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
