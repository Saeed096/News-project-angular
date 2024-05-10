import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';  
import { iUser } from '../Models/iUser';
import { environment } from '../../environments/environment.development'; 



@Injectable({
  providedIn: 'root'
})
export class ApiIUserServiceService {

  constructor(private _httpClient : HttpClient) { } 

  login(user : iUser) : Observable<any[]>  // iproduct
  {
   return (this._httpClient.post<any[]>(`${environment.baseUrl}Account/login`, user)); 
  }
  
}
