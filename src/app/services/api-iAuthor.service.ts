import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development'; 
import { iAuthor } from '../Models/iAuthor';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ApiIauthorService {

  constructor(private _HttpClient : HttpClient) { }

  getAll() : Observable<any[]>
  {
    return this._HttpClient.get<any[]>(`${environment.baseUrl}Author`)
  }

  delete(authorId : number) : Observable<any[]>
  {
    return this._HttpClient.delete<any[]>(`${environment.baseUrl}Author?id=${authorId}`)  
  }

  add(newAuthor : iAuthor) : Observable<any[]>
  {
    return this._HttpClient.post<any[]>(`${environment.baseUrl}Author`,newAuthor)  // should any not any[]!!!!!!!!!!! 
  }

  getById(id : number) : Observable<any>
  {
    //console.log(id);
    
    return this._HttpClient.get<any>(`${environment.baseUrl}Author/id?id=${id}`)   
  }

  update(author : iAuthor) : Observable<any>
  {
    return this._HttpClient.put<any>(`${environment.baseUrl}Author/update`, author)   
  }
}
