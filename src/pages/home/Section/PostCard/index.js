import dayjs from 'dayjs';
import React, { MouseEventHandler } from 'react';

import Card from '@/components/Card';

import s from './index.module.scss';
import PostCardLoading from './PostCardLoading';

function PostCard({loading}) {

  let title = 'test',
  content = 'hello world i workd hard',
  date = new Date(),
  tags = ['test', 'good'];

  const onClick = () => {

  }

  return (
    <Card className={s.section_card} isStatic={true} onClick={onClick}>
      {loading ? (
        <PostCardLoading />
      ) : (
        <>
          <div className={s.title}>{title}</div>
          <p className={s.content}>
            {content.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
          </p>
          <div className={s.info}>
            <span className={s.date}>{dayjs(date).format('YYYY-MM-DD')}</span>
            <div className={s.tags}>
              {tags.map(tag => (
                <span className={s.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </Card>
  );
}

export default PostCard;
