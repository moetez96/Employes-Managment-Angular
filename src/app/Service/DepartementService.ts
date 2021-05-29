import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Departement} from '../Model/Departement';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient, private router: Router) {
  }

  departements: any;
  departement;
  addDepartement(data: any): Observable<any> {
    const url = 'http://localhost:3000/departement/';
    return this.http.post(url, data);
  }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get<any>('http://localhost:3000/departement/').subscribe(
      (data) => {
        this.departements = data;
        console.log(this.departements);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }
  Update(data: any, id: any): Observable<any> {
    const url = 'http://localhost:3000/departement/' + id;
    return this.http.put(url, data);
  }
  // tslint:disable-next-line:typedef
  Delete(id) {
    this.http.delete('http://localhost:3000/departement/' + id).subscribe(
      data => this.router.navigate(['list/departements'])
    );
  }
  // tslint:disable-next-line:typedef
  getById(id: number) {
    return this.http.get<any>('http://localhost:3000/departement/' + id);
  }

  // tslint:disable-next-line:typedef
  submit(form) {
    this.addDepartement(form)
      .subscribe(() => {
        this.router.navigate(['list/departements']);
      });
  }
}
