import {Component, OnInit} from '@angular/core';
import {EmployeService} from '../Service/EmployeService';
import {Employe} from '../Model/Employe';
import {Departement} from '../Model/Departement';
import {DepartementService} from '../Service/DepartementService';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  constructor(public employeeservice: EmployeService, public  departementService: DepartementService) {

  }

  ngOnInit(): void {
    this.employeeservice.getAll();
    this.departementService.getAll();
  }

}
