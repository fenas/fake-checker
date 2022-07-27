import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  searchNews() {
    let url = 'https://fake-checker-api.adi.so/api/news';

    return this.http.get(url, { withCredentials: true });
  }
}
