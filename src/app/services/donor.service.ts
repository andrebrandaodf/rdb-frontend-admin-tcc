import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Donor } from '../models/donor.model';


@Injectable({
  providedIn: 'root',
})
export class DonorService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(donor: Donor) {

    return this.http.post(`${environment.baseUrl}/donor`, donor);
  }

  getCep(cep: number) {
    return this.http.get(`http://localhost:8080/cep/${cep}`);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/donor`);
  }

  read() {
    return this.http.get(`${environment.baseUrl}/donor`);
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/donor/${id}`;
    return this.http.get<Donor>(url);
  }

  update(donor: Donor) {
    const url = `${environment.baseUrl}/donor/${donor.id}`;
    return this.http.put<Donor>(url, donor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number) {
    const url = `${environment.baseUrl}/donor/${id}`;
    return this.http.delete(url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
