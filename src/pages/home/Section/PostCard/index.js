import dayjs from 'dayjs';
import React, { MouseEventHandler } from 'react';

import Card from '@/components/Card';

import './index.scss';
import PostCardLoading from './PostCardLoading';

function PostCard({loading}) {

  let title = 'test',
  content = 'hello world i workd hard',
  date = new Date(),
  tags = ['test', 'good'];

  const onClick = () => {

  }

  return (
    <Card className={"card"} isStatic={true} onClick={onClick}>
      {loading ? (
        <PostCardLoading />
      ) : (
        <>
          <div className={"title"}>{title}</div>
          <p className={"content"}>
            {content.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
          </p>
          <div className={"info"}>
            <span className={"date"}>{dayjs(date).format('YYYY-MM-DD')}</span>
            <div className={"tags"}>
              {tags.map(tag => (
                <span className={"tag"} key={tag}>
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
