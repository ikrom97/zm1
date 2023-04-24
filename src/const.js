export const AppRoute = {
  Home: '/',
  Quotes: '/quotes',
  QuotesSelected: '/quotes/:id',
  Tags: '/tags',
  Author: '/author',
  PrivacyPolicy: '/privacy-policy',
};

export const AppPage = {
  Home: 'Main',
  Quotes: 'Thoughts',
  Tags: 'Tags',
  Author: 'Main',
  PrivacyPolicy: 'Terms of use',
};

export const navs = [
  // {
  //   title: AppPage.Quotes,
  //   path: AppRoute.Quotes,
  // },
  // {
  //   title: AppPage.Tags,
  //   path: AppRoute.Tags,
  // },
  {
    title: AppPage.Home,
    path: AppRoute.Home,
  }
];