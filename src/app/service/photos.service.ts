import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class appSettings{     
  public static get API_ENDPOINT():string{
    return 'https://jsonplaceholder.typicode.com/photos?=100';
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url:string;
  constructor(private http: HttpClient) {

    this.url = appSettings.API_ENDPOINT;
   }

  getPhotos(){
     
   return this.http.get(`${this.url}`)
        .pipe(
          map(res=>res)
        )
  }
}
