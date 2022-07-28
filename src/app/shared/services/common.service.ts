import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../models/news.interface';
import { PollResults } from '../models/poll_results.interface';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  searchNews() {
    return this.http.get<News[]>(`${environment.apiUrl}/news`, {
      withCredentials: true,
    });
  }

  pollFetch(pollid: string) {
    return this.http.get<PollResults>(`${environment.apiUrl}/poll/${pollid}`, {
      withCredentials: true,
    });
  }
}
