export const AppRoute = {
  Home: '/',
  Thoughts: '/thoughts',
  Tags: '/tags',
  Author: '/author',
  PrivacyPolicy: '/privacy-policy',
};

export const AppPage = {
  Home: 'Главная',
  Thoughts: 'Мысли',
  Tags: 'Теги',
  Author: 'Об авторе',
  PrivacyPolicy: 'Пользовательское соглашение',
};

export const NavigationPages = [
  {
    title: AppPage.Thoughts,
    path: AppRoute.Thoughts,
  },
  {
    title: AppPage.Tags,
    path: AppRoute.Tags,
  },
  {
    title: AppPage.Author,
    path: AppRoute.Author,
  }
];