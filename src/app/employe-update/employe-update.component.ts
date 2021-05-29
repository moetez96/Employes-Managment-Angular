import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeService} from '../Service/EmployeService';
import {Employe} from '../Model/Employe';

@Component({
  selector: 'app-employe-update',
  templateUrl: './employe-update.component.html',
  styleUrls: ['./employe-update.component.css']
})
export class EmployeUpdateComponent implements OnInit {
  formEmploye: any;
  Id;
  employe: any;

  constructor(public employeService: EmployeService, private  fb: FormBuilder, private router: Router,
              private route: ActivatedRoute) {
    this.formEmploye = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      cin: ['', Validators.required],
      salaire: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.Id = this.route.snapshot.paramMap.get('id');
    this.employeService.getById(this.Id).subscribe((data) => {
      this.employe = data;
      this.formEmploye.patchValue(this.employe);
    });
    console.log(this.Id);
  }
  update(){
    this.employeService.Update(this.formEmploye.value, this.Id).subscribe(
      data => this.router.navigate(['list'])
    );
  }

}
