import React from 'react';
import { Navigation, NavigationItem, NavigationLink, NavigationList } from './styled';
import Button from '@/components/ui/button/button';
import { AppPage, AppRoute } from '@/const';
import SearchIcon from '@/components/ui/icons/search-icon';
import UserIcon from '@/components/ui/icons/user-icon';
import { useRouter } from 'next/router';

function MainNavigation() {
  const router = useRouter();
  const setClassName = (path) => router.pathname.includes(path) ? 'active' : '';

  return (
    <Navigation>
      <NavigationList>
        <NavigationItem>
          <NavigationLink
            className={setClassName(AppRoute.Thoughts)}
            href={AppRoute.Thoughts}
          >
            {AppPage.Thoughts}
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink
            className={setClassName(AppRoute.Tags)}
            href={AppRoute.Tags}
          >
            {AppPage.Tags}
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink
            className={setClassName(AppRoute.Author)}
            href={AppRoute.Author}
          >
            {AppPage.Author}
          </NavigationLink>
        </NavigationItem>
      </NavigationList>

      <NavigationList>
        <NavigationItem>
          <Button title="Поиск">
            <SearchIcon />
          </Button>
        </NavigationItem>
        <NavigationItem>
          <Button>
            <UserIcon /> Вход
          </Button>
        </NavigationItem>
      </NavigationList>
    </Navigation>
  );
}

export default MainNavigation;
