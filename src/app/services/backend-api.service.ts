import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private httpClient: HttpClient) { }


  testApi(){
    let url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    return this.httpClient.get(url);
  }
}
