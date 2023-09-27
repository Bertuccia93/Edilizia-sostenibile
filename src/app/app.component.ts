import { Component } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'good-tomatoes';

  constructor( private back:BackendApiService ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.back.testApi().subscribe(res=>{
      console.log(res);
    })
  }

}
