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
        <Quote>Happiness is satisfaction in <br />
          serving the values of humanism</Quote>
      </Author>

      <ScreenTitle>About author</ScreenTitle>
      <AuthorName>Zafar Mirzo</AuthorName>

      <Info>
        <InfoItem>
          <InfoTitle>Date of Birth</InfoTitle>
          <InfoDescription>May 1, 1972</InfoDescription>
        </InfoItem>

        <InfoItem>
          <InfoTitle>About author</InfoTitle>
          <InfoDescription>
            <Text>Social entrepreneur & Chairman. I also engage in philosophical creativity, and here I publish some of my brief thoughts.</Text>
          </InfoDescription>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Quotes</InfoTitle>
          <InfoDescription>
            <Text>Inspirational quotes from the author published on popular websites:</Text>
            <QuoteLinks>
              <Button>Quotes of famous people</Button>
              <Button>Proza.ru</Button>
              <Button>Million statuses</Button>
              <Button>Quotes.info</Button>
              <Button>Pearls of Thought</Button>
            </QuoteLinks>
          </InfoDescription>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Social media</InfoTitle>
          <InfoDescription>
            <SocialLinks />
          </InfoDescription>
        </InfoItem>
      </Info>
    </Screen>
  );
}

export default AuthorScreen;
