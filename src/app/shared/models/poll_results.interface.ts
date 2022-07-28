import { BaseNews } from './news.interface';

export interface PollResults {
  id: string;
  newsId: string;
  userId: string;
  reported_fake_by: number;
  reported_not_fake_by: number;
  created_at: Date;
  updated_at: Date;
  news: BaseNews;
  user: User;
}

export interface User {
  id: string;
  firstName: string;
  lastName: null;
  email: string;
  password: null;
  image: string;
}
