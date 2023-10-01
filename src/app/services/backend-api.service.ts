import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    categories:string[];
    pageCount:number;
    publishedDate:string;
    industryIdentifiers:[{
      type: string, 
      identifier: string
    }];
    language:string;
    publisher: string;
    publishDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}
@Injectable({
  providedIn: 'root'
})



export class BackendApiService {  
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) { }


  search(query: string): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(`${this.API_PATH}?q=${query}`)
      .pipe(map(books => books.items || []));
  }

  getById(volumeId: string): Observable<Book> {
    return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
  }
}
