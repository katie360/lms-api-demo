import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface Student {
  firstName: string;
  lastName: string;
  email: string;
}



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = 'https://localhost:7170/api';


  constructor(private httpClient:HttpClient) { }


  getStudents(): Observable<any> {
    const endpoint = 'Students';
    const apiUrl = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.get<Student[]>(apiUrl);
  }

  addStudent(newData:Student): Observable<any> {
    const endpoint = `Students`;
    const apiUrl = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.post(apiUrl, newData);
  }


  // postData(data: DataModel):Observable<DataModel>{
  //   return this.httpClient.post<DataModel>(this.apiUrl, data).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  // postData(data: DataModel): Observable<DataModel> {
  //   return this.httpClient.post<DataModel>(this.apiUrl, data).pipe(
  //     catchError((error) => {
  //       console.log("Found an Error:", error);
  //        this.handleError(error)
  //       return throwError(error);
  //     })
  //   );
  // }
  // private handleError(error: HttpErrorResponse){
  //   console.log(error)
  //   if (error.error) {
  //     console.error('A client-side error occurred:', error.message);
  //   }

  //   return throwError('Something went wrong; please try again later.');
  // }

}
