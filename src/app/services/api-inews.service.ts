import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { environment } from '../../environments/environment.development'; 
import { iNews } from '../Models/iNews';


@Injectable({
  providedIn: 'root'
})
export class ApiInewsService {

  constructor(private _HttpClient : HttpClient) { }

  getAll() : Observable<any[]>
  {
    return this._HttpClient.get<any[]>(`${environment.baseUrl}News`)
  }

  add(news : iNews) : Observable<any>
  {
     news.publicationDate = new Date(news.publicationDate);
    //  const formData = new FormData();
    //  formData.append("imageFile",news.imageFile);
    //  formData.append("title",news.title);
    //  formData.append("news",news.news);
    //  formData.append("publicationDate", news.publicationDate.toISOString());
    //  formData.append("authorId", news.authorId !== null && 
    //  news.authorId !== undefined ? news.authorId.toString() : "");
   //  console.log(formData);
    //  var title = "sd"
    return this._HttpClient.post<any>(`${environment.baseUrl}News/add`,news)
  }

  // new 
  uploadImg(img : any) : Observable<any>
  {
    console.log("file reached to service" + img);
    const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');

    return this._HttpClient.post<any>(`${environment.baseUrl}News/saveImage`, img,{headers : headers})
  }

  delete(id : number) : Observable<any[]>
  {
    return this._HttpClient.delete<any[]>(`${environment.baseUrl}News?id=${id}`)  
  }


  getById(id : number) : Observable<any>
  {
    return this._HttpClient.get<any>(`${environment.baseUrl}News/id?id=${id}`)   
  }

  update(news : iNews) : Observable<any>
  {
    return this._HttpClient.put<any>(`${environment.baseUrl}News`, news)   
  }
}
