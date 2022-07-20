import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Rides } from './rides';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http:HttpClient) { }



  getRidesList():Observable<Rides[]>{
    return this.http.get<Rides[]>("assets/rides.json").pipe(
      // tap((data:any)=>this.ridesList=data)
      catchError(this.handleError)
    );
  }



  handleError(err:HttpErrorResponse):Observable<any>{
    let msg ="";
    if(err.error instanceof Error){
      msg = err.error.message;
    }else{
      msg = err.error.status;
  }
  return throwError(()=>msg);
  }



}
