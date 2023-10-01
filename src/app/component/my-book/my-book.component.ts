import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.sass']
})
export class MyBookComponent implements OnInit {
  bookId: string='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.bookId = params['id'];
        console.log(params['id'])
      });
  }

}
