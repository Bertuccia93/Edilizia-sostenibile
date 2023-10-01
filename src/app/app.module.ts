import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailBookComponent } from './component/detail-book/detail-book.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { MyBookComponent } from './component/my-book/my-book.component';
import { SearchBookComponent } from './component/search-book/search-book.component';
import { BackendApiService } from './services/backend-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    DetailBookComponent,
    HeaderComponent,
    FooterComponent,
    MyBookComponent,
   
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
