import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, {params})
      .pipe(catchError(this.formatErrors));
  }

}
