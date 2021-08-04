import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string="http://localhost:3000/Employees";

  constructor(private http:HttpClient){

    }

    getEmployees():Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url);
    

    }


    errorHandler(error:HttpErrorResponse){
      return Observable.throw(error.message|| "Server Error");
    }

}
