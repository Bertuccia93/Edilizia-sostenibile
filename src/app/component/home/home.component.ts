import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendApiService, Book } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  boks: Book[] = [];
  displayedBooks: Book[] = [];
  booksPerPage = 5;
  inputValue = '';

  constructor(private gbs: BackendApiService) { }

  ngOnInit(): void {
  }

  onSearchInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.gbs.search(this.inputValue).subscribe(res => {
      this.boks = res;
      this.updateDisplayedBooks();
    });
  }

  updateDisplayedBooks() {
    this.displayedBooks = this.boks.slice(0, this.booksPerPage);
  }
}
