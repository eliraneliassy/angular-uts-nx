import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, reduce, tap, Observable } from 'rxjs';
import { Item } from './item/item.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  getBooks(searchTerm: string): Observable<Item[]> {
    let params = new HttpParams();
    params = params.append('q', searchTerm);
    return this.httpClient.get<any>(this.BASE_URL, { params })
      .pipe(
        map((res) => res.items),

        map((items: any[]) =>
          items
            .map(item => item.volumeInfo)
            .map(item => ({ title: item.title, previewImgUrl: item.imageLinks.thumbnail }))))
      

  }
}
