import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Content-Type':'application/json',
    'Authorization': 'Bearer a5ndE70LYDfpEZ0up_0voeIxAmw0dxVF0rx3s3BNbZIUUMl-aTXIPEa-02NdRJhckBU7Y3JLiF-C2s9FM1XmzghF93ZS5fY1FJvJterEanZzseRltwzxSc9wHJl9W3Yx'
  })
}

@Injectable({
  providedIn: 'root'
})
export class YelpapiService {

  constructor(private http: HttpClient){}

  testApi(){
    return this.http.get('https://api.yelp.com/v3/businesses/search?location=indiana', httpOptions)
    // .subscribe(res => console.log(res))
  }
}