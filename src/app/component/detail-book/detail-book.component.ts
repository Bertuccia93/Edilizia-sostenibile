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

}
