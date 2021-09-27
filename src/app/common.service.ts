import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Movie } from './movie.model';
import { Observable } from 'rxjs';
import { RouteConfigLoadEnd } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  headerObject = {
    "Content-Type": "application/json",

  }
  headers = new HttpHeaders(this.headerObject);
  saveMovies(data) {
    console.log("Am I working?")
    return this.http.post('https://fir-f38f4-default-rtdb.firebaseio.com/.json', {
      data: data
    }, { headers: this.headers })
  }
  getMovies(): Observable<any> {

    return this.http.get('https://fir-f38f4-default-rtdb.firebaseio.com/.json?print=pretty'
    )


  }

  signUp(email: string, password: string) {
    console.log("auth");
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArKM_TR3ixzzsowu1ZLzpywQUUa5XRMso', {
      email: email,
      password: password,
      returnSecureToken: true
    }, { headers: this.headers }).pipe(catchError(this.handleError))
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArKM_TR3ixzzsowu1ZLzpywQUUa5XRMso',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }, { headers: this.headers }
    ).pipe(catchError(this.handleError))

  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }

  public isLoggedIn() {
    return localStorage.getItem('Token') !== null;

  }
}


