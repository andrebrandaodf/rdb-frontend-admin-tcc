import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';


@Injectable({
  providedIn: 'root',
})
export class ItemService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(item: Item) {

    return this.http.post(`${environment.baseUrl}/item`, item);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/item`);
  }

  read() {
    return this.http.get(`${environment.baseUrl}/item`);
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/item/${id}`;
    return this.http.get<Item>(url);
  }

  update(item: Item) {
    const url = `${environment.baseUrl}/item/${item.id}`;
    return this.http.put<Item>(url, item).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number) {
    const url = `${environment.baseUrl}/item/${id}`;
    return this.http.delete(url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
