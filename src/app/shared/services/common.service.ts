import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseNews, News } from '../models/news.interface';
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

  getsinglenews(id: string) {
    return this.http.get<News>(`${environment.apiUrl}/news/${id}`, {
      withCredentials: true,
    });
  }

  postNews(data: BaseNews) {
    return this.http.post(`${environment.apiUrl}/news`, data, {
      withCredentials: true,
    });
  }

  vote(pollid: string, type: string) {
    let body = {
      action: type,
    };
    return this.http.post(`${environment.apiUrl}/poll/${pollid}`, body, {
      withCredentials: true,
    });
  }
}
