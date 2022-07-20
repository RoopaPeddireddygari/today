import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  private isloggedIn:boolean=false;

  getUsersList():Observable<User[]>{
    return this.http.get<User[]>("assets/users.json").pipe(
      catchError(this.handleError),
      // tap(data=>console.log(JSON.stringify(data)))
    );
  }

  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.getUsersList().pipe(
        map(users => {
            const Authenticateduser = users.find(user => (user.userName === username) && (user.password === password));
            if (Authenticateduser) {
                this.isloggedIn = true;
            } else {
                this.isloggedIn = false;
            }
            return this.isloggedIn;
        })
    );
}
isUserLoggedIn(): boolean {
    return this.isloggedIn;
}
  
  handleError(httpErrRes:HttpErrorResponse){
    let msg =""
    if(httpErrRes.error instanceof Error){
      msg= httpErrRes.error.message;
    }else{
      msg = httpErrRes.error.status;
    }
    return throwError(()=>msg);
  }


}
