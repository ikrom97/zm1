import React from 'react';
import { List, ListItem, PageLink, StyledNavigation } from './styled';
import Button from '@/components/ui/button/button';
import SearchIcon from '@/components/ui/icons/search-icon';
import UserIcon from '@/components/ui/icons/user-icon';
import { useRouter } from 'next/router';
import { NavigationPages } from '@/const';

function Navigation() {
  const router = useRouter();
  const setClassName = (path) => router.pathname.includes(path) ? 'active' : '';

  return (
    <StyledNavigation>
      <List>
        {NavigationPages?.map(({title, path}) => (
          <ListItem key={title}>
            <PageLink
              className={setClassName(path)}
              href={path}
            >
              {title}
            </PageLink>
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
    </StyledNavigation>
  );
}

export default Navigation;
