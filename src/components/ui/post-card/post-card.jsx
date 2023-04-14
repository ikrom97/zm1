import React from 'react';
import { Card, PostDescription, PostImage, PostTitle } from './styled';

function PostCard({ post }) {
  const { title, image, description } = post;

  return (
    <Card tabIndex={0}>
      <PostImage
        src={image}
        width={232}
        height={142}
        alt={title}
      />

      <PostTitle>{title}</PostTitle>

      <PostDescription>{description}</PostDescription>
    </Card>
  );
}

export default PostCard;
