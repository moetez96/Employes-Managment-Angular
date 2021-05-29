import {Component, OnInit} from '@angular/core';
import {EmployeService} from '../Service/EmployeService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employe-delete',
  templateUrl: './employe-delete.component.html',
  styleUrls: ['./employe-delete.component.css']
})
export class EmployeDeleteComponent implements OnInit {
  id;

  constructor(public employeeservice: EmployeService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
  }

}
