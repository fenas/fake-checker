import { Injectable } from '@angular/core';
import { news } from '../modals/news.modal';

@Injectable({
  providedIn: 'root',
})
export class DemoDataService {
  constructor() {}

  demoNews: news[] = [
    {
      heading: 'Micheal jackson is not Dead!',
      url: 'www.somenewschannel.news/mj-not-dead',
      news_auther: 'fake news publisher name',
      reported_by: 'fenas',
      why_fake:
        'On June 25, 2009, he died from cardiac arrest. Conrad Murray, his personal physician, had given Jackson several medications to help him sleep at his rented home in Los Angeles.',
      type: 'social media post',
      date_of_news: '21/7/2010',
      date_reported: '07/07/2022',
      fakeness_score: 80,
      reported_fake_by: 20,
      reported_not_fake_by: 0,
      poll_results: {
        reported_fake_by: 20,
        reported_not_fake_by: 0,
      },
    },

    {
      heading: 'Micheal jackson is not Dead!',
      url: 'www.somenewschannel.news/mj-not-dead',
      news_auther: 'fake news publisher name',
      reported_by: 'fenas',
      why_fake:
        'On June 25, 2009, less than three weeks before Jackson was set to perform his first This Is It show in London, he died from cardiac arrest. Conrad Murray, his personal physician, had given Jackson several medications to help him sleep at his rented home in Los Angeles.',
      type: 'social media post',
      date_of_news: '21/7/2010',
      date_reported: '07/07/2022',
      fakeness_score: 40,
      reported_fake_by: 20,
      reported_not_fake_by: 0,
      poll_results: {
        reported_fake_by: 20,
        reported_not_fake_by: 0,
      },
    },
    {
      heading: 'Micheal jackson is not Dead!',
      url: 'www.somenewschannel.news/mj-not-dead',
      news_auther: 'fake news publisher name',
      reported_by: 'fenas',
      why_fake:
        'On June 25, 2009, less than three weeks before Jackson was set to perform his first This Is It show in London, he died from cardiac arrest. Conrad Murray, his personal physician, had given Jackson several medications to help him sleep at his rented home in Los Angeles.',
      type: 'social media post',
      date_of_news: '21/7/2010',
      date_reported: '07/07/2022',
      fakeness_score: 80,
      reported_fake_by: 20,
      reported_not_fake_by: 0,
      poll_results: {
        reported_fake_by: 20,
        reported_not_fake_by: 0,
      },
    },

    {
      heading: 'Micheal jackson is not Dead!',
      url: 'www.somenewschannel.news/mj-not-dead',
      news_auther: 'fake news publisher name',
      reported_by: 'fenas',
      why_fake:
        'On June 25, 2009, less than three weeks before Jackson was set to perform his first This Is It show in London, he died from cardiac arrest. Conrad Murray, his personal physician, had given Jackson several medications to help him sleep at his rented home in Los Angeles.',
      type: 'social media post',
      date_of_news: '21/7/2010',
      date_reported: '07/07/2022',
      fakeness_score: 80,
      reported_fake_by: 20,
      reported_not_fake_by: 0,
      poll_results: {
        reported_fake_by: 20,
        reported_not_fake_by: 0,
      },
    },
  ];
}
