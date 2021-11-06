import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Event } from '../models/event.model';


@Injectable({
  providedIn: 'root',
})
export class EventService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(event: Event) {

    return this.http.post(`${environment.baseUrl}/event`, event);
  }

  getCep(cep: number) {
    return this.http.get(`http://localhost:8080/cep/${cep}`);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/event`);
  }

  read() {
    return this.http.get(`${environment.baseUrl}/event`);
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/event/${id}`;
    return this.http.get<Event>(url);
  }

  update(event: Event) {
    const url = `${environment.baseUrl}/event/${event.id}`;
    return this.http.put<Event>(url, event).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number) {
    const url = `${environment.baseUrl}/event/${id}`;
    return this.http.delete(url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
