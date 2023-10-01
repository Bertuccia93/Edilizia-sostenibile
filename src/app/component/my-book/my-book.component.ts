import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.sass']
})
export class MyBookComponent implements OnInit {
  bookData:any=[]
  constructor(private route: ActivatedRoute,private gbs: BackendApiService) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.getDetailBook(params['id'])
      });
  }

  getDetailBook(bookId:string){
    this.gbs.getById(bookId).subscribe(res=>{
      this.bookData=res;
      console.log(this.bookData)
    })
  }

}
