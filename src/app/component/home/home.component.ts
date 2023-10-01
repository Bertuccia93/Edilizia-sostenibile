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
  currentPage = 0;
  booksPerPage = 3;

  constructor(private gbs: BackendApiService) { }

  ngOnInit(): void {
  }

  async onSearchInputChange(event: Event): Promise<void> {
    
    const inputValue = (event.target as HTMLInputElement).value;
    if( inputValue =='') {
      this.displayedBooks=[]
    }else{  
      this.gbs.search(inputValue).subscribe(res => {
        this.boks = res;
        console.log(res)
        this.updateDisplayedBooks();
      });
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateDisplayedBooks();
    }
  }

  nextPage() {
    if (this.currentPage < this.maxPage) {
      this.currentPage++;
      this.updateDisplayedBooks();
    }
  }

  updateDisplayedBooks() {
    const startIndex = this.currentPage * this.booksPerPage;
    const endIndex = startIndex + this.booksPerPage;
    this.displayedBooks = this.boks.slice(startIndex, endIndex);
  }

  get maxPage() {
    return Math.ceil(this.boks.length / this.booksPerPage) - 1;
  }
}
