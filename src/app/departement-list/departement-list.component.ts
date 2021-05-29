import {Component, OnInit} from '@angular/core';
import {Employe} from '../Model/Employe';
import {EmployeService} from '../Service/EmployeService';
import {Departement} from '../Model/Departement';
import {DepartementService} from '../Service/DepartementService';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {
  id;
  show = false;

  constructor(public departementService: DepartementService, public employeService: EmployeService) {

  }

  ngOnInit(): void {
    this.departementService.getAll();
    this.employeService.getAll();
  }

  filter(id: any) {
    this.show = true;
    this.id = id;
  }
}
