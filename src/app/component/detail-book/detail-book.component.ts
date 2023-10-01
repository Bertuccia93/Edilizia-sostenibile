import { Component, Input, OnInit } from '@angular/core';
import { BackendApiService, Book } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.sass']
})
export class DetailBookComponent implements OnInit {
  @Input() book = {} as Book;
  constructor() { }

  ngOnInit(): void {
  } 


  getAuthorsText(): string {
    if (!this.book || !this.book.volumeInfo || !this.book.volumeInfo.authors) {
      return "Non ho trovato autori";
    }
    const authors = this.book.volumeInfo.authors;
    if (authors.length === 1) {
      return "Autore: " + authors[0];
    } else if (authors.length > 1) {
      return "Autori: " + authors.join(', ');
    } else {
      return "Non ho trovato autori";
    }
  }


}
