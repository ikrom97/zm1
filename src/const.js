export const AppRoute = {
  Home: '/',
  Quotes: '/quotes',
  QuotesSelected: '/quotes/:id',
  Tags: '/tags',
  Author: '/author',
  PrivacyPolicy: '/privacy-policy',
};

export const AppPage = {
  Home: 'Главная',
  Quotes: 'Мысли',
  Tags: 'Теги',
  Author: 'Об авторе',
  PrivacyPolicy: 'Пользовательское соглашение',
};

export const navs = [
  {
    title: AppPage.Quotes,
    path: AppRoute.Quotes,
  },
  // {
  //   title: AppPage.Tags,
  //   path: AppRoute.Tags,
  // },
  {
    title: AppPage.Author,
    path: AppRoute.Author,
  }
];