import React from 'react'
import SocialLink from '@/components/ui/social-link/social-link';
import FacebookIcon from '@/components/ui/icons/facebook-icon';
import InstagramIcon from '@/components/ui/icons/instagram-icon';
import TwitterIcon from '@/components/ui/icons/twitter-icon';
import TelegramIcon from '@/components/ui/icons/telegram-icon';
import { List, ListItem } from './styled';

function SocialLinks() {
  return (
    <List>
      <ListItem>
        <SocialLink
          href="#"
          title="Фейсбук"
          icon={<FacebookIcon />}
        />
      </ListItem>
      <ListItem>
        <SocialLink
          href="#"
          title="Инстаграм"
          icon={<InstagramIcon />}
        />
      </ListItem>
      <ListItem>
        <SocialLink
          href="#"
          title="Твиттер"
          icon={<TwitterIcon />}
        />
      </ListItem>
      <ListItem>
        <SocialLink
          href="#"
          title="Телеграм"
          icon={<TelegramIcon />}
        />
      </ListItem>
    </List>
  )
}

export default SocialLinks;
