
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  ServerUrl: String = environment.url;
  errorData: {};
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http: HttpClient) { 
   }
  // ----------------------------------------------------------------------------

  all() {
    return this.http.get<any>(this.ServerUrl + 'users/all', this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  userDetail(formdata:any) {
    return this.http.post<any>(this.ServerUrl + 'users/detail', formdata, this.httpOptions).pipe(catchError(this.handleError));
  }
 

  // ----------------------------------------------------------------------------

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
