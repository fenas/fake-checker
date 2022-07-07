export interface news {
  heading: string;
  url: string;
  news_auther: string;
  reported_by: string;
  why_fake: string;
  type: string;
  date_of_news: string;
  date_reported: string;
  fakeness_score: number;
  reported_fake_by: number;
  reported_not_fake_by: number;
  poll_results: {
    reported_fake_by: number;
    reported_not_fake_by: number;
  };
}
