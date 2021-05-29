import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeService} from '../Service/EmployeService';
import {Router} from '@angular/router';
import {DepartementService} from '../Service/DepartementService';

@Component({
  selector: 'app-departement-add',
  templateUrl: './departement-add.component.html',
  styleUrls: ['./departement-add.component.css']
})
export class DepartementAddComponent implements OnInit {

  formDepartement: FormGroup;
  errorMsg: string;

  constructor(private fb: FormBuilder, public departementService: DepartementService,
              private router: Router) {
    this.formDepartement = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
