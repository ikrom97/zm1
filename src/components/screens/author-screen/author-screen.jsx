import React from 'react';
import Text from '@/components/ui/text/text';
import Button from '@/components/ui/button/button';
import SocialLinks from '@/components/ui/social-links/social-links';
import {
  Author,
  AuthorImage,
  AuthorName,
  Info,
  InfoDescription,
  InfoItem,
  InfoTitle,
  Quote,
  QuoteLinks,
  Screen,
  ScreenTitle
} from './styled';

function AuthorScreen() {
  return (
    <Screen>
      <Author>
        <AuthorImage
          src="/img/author.jpg"
          width={420}
          height={420}
          alt="Зафар Мирзо"
          priority
        />
        <Quote>Счастье – удовлетворённость <br />
          служением ценностям гуманизма</Quote>
      </Author>

      <ScreenTitle>Об авторе</ScreenTitle>
      <AuthorName>Зафар Мирзо</AuthorName>

      <Info>
        <InfoItem>
          <InfoTitle>Дата рождения</InfoTitle>
          <InfoDescription>1 Мая 1972</InfoDescription>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Об авторе</InfoTitle>
          <InfoDescription>
            <Text>Предприниматель, страны деятельности Индия и СНГ. Предприниматель, страны деятельности Индия и СНГ. Предприниматель, страны деятельности Индия и СНГ.</Text>
            <Text>Предприниматель, страны деятельности Индия и СНГ. Автор делится своим философским творчеством — опыт из жизни, собственное видение мироздания, затрагивает современные актуальные темы общества, раскрывает новые грани жизни, в форме изречений и понятий.</Text>
          </InfoDescription>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Цитаты</InfoTitle>
          <InfoDescription>
            <Text>Вдохновляющие цитаты автора, опубликованные на популярных сайтах:</Text>
            <QuoteLinks>
              <Button>Цитаты известных личностей</Button>
              <Button>Проза.ру</Button>
              <Button>Миллион статусов</Button>
              <Button>Цитаты.инфо</Button>
              <Button>Жемчужины мысли</Button>
            </QuoteLinks>
          </InfoDescription>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Социальные сети</InfoTitle>
          <InfoDescription>
            <SocialLinks />
          </InfoDescription>
        </InfoItem>
      </Info>
    </Screen>
  );
}

export default AuthorScreen;
