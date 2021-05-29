import {Component, OnInit} from '@angular/core';
import {EmployeService} from '../Service/EmployeService';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartementService} from '../Service/DepartementService';

@Component({
  selector: 'app-departements-delete',
  templateUrl: './departements-delete.component.html',
  styleUrls: ['./departements-delete.component.css']
})
export class DepartementsDeleteComponent implements OnInit {

  id;

  constructor(public departementService: DepartementService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
  }

}
