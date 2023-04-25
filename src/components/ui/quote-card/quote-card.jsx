import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';
import Text from '../text/text';

function BlockQuote({ quote, className }) {
  return (
    <blockquote className={classNames(style.blockquote, className)}>
      <div className={style.wrapper}>
        <Text>{quote}</Text>
      </div>
    </blockquote>
  );
}

export default BlockQuote;
