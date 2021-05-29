import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employe} from '../Model/Employe';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
   i: number;
   show: boolean;
   searchid: any;
   searchnom: any;
   searchdepartement: any;
   critere: any;
   X;
  constructor(private http: HttpClient, private router: Router) {
  }

  employees: any;
  employe;

  adduser(data: any): Observable<any> {
    const url = 'http://localhost:3000/employee/';
    return this.http.post(url, data);
  }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get<any>('http://localhost:3000/employee/').subscribe(
      (data) => {
        this.employees = data;
        console.log(this.employees);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }

  Update(data: any, id: any): Observable<any> {
    const url = 'http://localhost:3000/employee/' + id;
    return this.http.put(url, data);
  }

  // tslint:disable-next-line:typedef
  Delete(id) {
    this.http.delete('http://localhost:3000/employee/' + id).subscribe(
      data => this.router.navigate(['list'])
    );
  }

  // tslint:disable-next-line:typedef
  getById(id: number) {
    return this.http.get<any>('http://localhost:3000/employee/' + id);
  }

  // tslint:disable-next-line:typedef
  submit(form) {
    this.adduser(form)
      .subscribe(() => {
        this.router.navigate(['list']);
      });
  }

  search(critere, X) {
    this.show = !this.show;
    this.i = -1;
    for (let i = 0; i < this.employees.length; i++) {
      if ((critere === 'prenom') && (this.employees[i].prenom === X)) {
        this.i = i;
      }

      if ((critere === 'nom') && (this.employees[i].nom === X)) {
        this.i = i;
      }

      if ((critere === 'departement') && (this.employees[i].departement === X)) {
        this.i = i;
      }
    }
    console.log(this.i);
    if (this.i !== -1) {
      this.searchid = this.employees[this.i].id;
      this.searchnom = this.employees[this.i].name;
      this.searchdepartement = this.employees[this.i].email;
    } else {
      this.show = false;
      alert('this client does not exist');
    }
  }
}
