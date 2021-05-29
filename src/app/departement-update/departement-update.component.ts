import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../Service/EmployeService';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartementService} from '../Service/DepartementService';

@Component({
  selector: 'app-departement-update',
  templateUrl: './departement-update.component.html',
  styleUrls: ['./departement-update.component.css']
})
export class DepartementUpdateComponent implements OnInit {
  formDepartement: any;
  Id;
  departement: any;

  constructor(public departementService: DepartementService, private  fb: FormBuilder, private router: Router,
              private route: ActivatedRoute) {
    this.formDepartement = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.Id = this.route.snapshot.paramMap.get('id');
    this.departementService.getById(this.Id).subscribe((data) => {
      this.departement = data;
      this.formDepartement.patchValue(this.departement);
    });
    console.log(this.Id);
  }
  update(){
    this.departementService.Update(this.formDepartement.value, this.Id).subscribe(
      data => this.router.navigate(['list/departement'])
    );
  }


}
