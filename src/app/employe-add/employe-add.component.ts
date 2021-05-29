import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Employe} from '../Model/Employe';
import {EmployeService} from '../Service/EmployeService';
import {DepartementService} from '../Service/DepartementService';

@Component({
  selector: 'app-employe-add',
  templateUrl: './employe-add.component.html',
  styleUrls: ['./employe-add.component.css']
})
export class EmployeAddComponent implements OnInit {
  formEmploye: FormGroup;
  errorMsg: string;

  constructor(private fb: FormBuilder, public employeeservice: EmployeService,
              private router: Router, public departementService: DepartementService) {
    this.formEmploye = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      cin: ['', Validators.required],
      salaire: ['', Validators.required],
      email: ['', Validators.required],
      departement: ['', Validators.required]

    });
  }

  ngOnInit(): void {
    this.departementService.getAll();
  }

}
