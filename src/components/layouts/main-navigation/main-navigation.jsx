import React from 'react';
import { List, ListItem, Navigation, StyledLink } from './styled';
import Button from '@/components/ui/button/button';
import SearchIcon from '@/components/ui/icons/search-icon';
import UserIcon from '@/components/ui/icons/user-icon';
import { useRouter } from 'next/router';
import { NavigationPages } from '@/const';

function MainNavigation() {
  const router = useRouter();
  const setClassName = (path) => router.pathname.includes(path) ? 'active' : '';

  return (
    <Navigation>
      <List>
        {NavigationPages?.map(({title, path}) => (
          <ListItem key={title}>
            <StyledLink
              className={setClassName(path)}
              href={path}
            >
              {title}
            </StyledLink>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem>
          <Button title="Поиск">
            <SearchIcon />
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <UserIcon /> Вход
          </Button>
        </ListItem>
      </List>
    </Navigation>
  );
}

export default MainNavigation;
