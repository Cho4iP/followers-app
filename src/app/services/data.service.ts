
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadRequest } from '../common/bad-request';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: string, private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.url);
  }

  create(resource :any) {
    return this.httpClient.post(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  update(resource :any) {
    return this.httpClient.put(this.url + '/' + resource.id, resource)
      .pipe(catchError(this.handleError));
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status === 400)
          return throwError(() => new BadRequest(error));

    if(error.status === 404) {
      return throwError(() => {
        new NotFoundError(error);
        //new Error('This Post has been already Deleted.' + error.message);
      });
    }

    return throwError(() => {
      new AppError(error);
      //new Error('An Unexpected Error occurred' + error.message);
    });
  }

}
