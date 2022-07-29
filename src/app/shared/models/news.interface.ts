export interface BaseNews {
  id?: string;
  heading: string;
  url: string;
  image: string | null;
  news_author: string;
  why_fake: string;
  type: string;
  date_of_news: Date;
  date_reported: Date;
  fakeness_score: number;
  reported_fake_by?: number;
  reported_not_fake_by?: number;
  other_outlet_running: null | boolean;
  author_has_contact: null | boolean;
  read_whole_new: null | boolean;
  userId?: string;
}

export interface News extends BaseNews {
  reported_by: ReportedBy;
  poll_results: PollResult[];
}

export interface PollResult {
  id: string;
  newsId: string;
  userId: string;
  reported_fake_by: number;
  reported_not_fake_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface ReportedBy {
  firstName: string;
  lastName: null;
  image: string;
}
