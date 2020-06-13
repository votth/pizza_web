import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPizza} from '../Interfaces/IPizza';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorHandler} from '../Shared/http-error-handler';

interface ServerDataArray {
  pizzas: IPizza[];
}

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizzaUrl = 'api/pizzas.json';

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<IPizza[]>{
    return this.http
      .get<ServerDataArray>(this.pizzaUrl)
      .pipe(
        // tap(data => console.table(data)),
        map(data => data.pizzas as IPizza[]),
        catchError(HttpErrorHandler.handleError)
      );
  }

}
