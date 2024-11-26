import dayjs from 'dayjs';
import React, { MouseEventHandler } from 'react';

import Card from '@/components/Card';

import s from './index.module.scss';
import PostCardLoading from './PostCardLoading';

function PostCard({ loading }) {

  let title = '这是一个标题',
    content = "## 这是一个标题\n\n这是一个段落。Markdown是一种轻量级标记语言，允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的HTML。\n\n- 列表项1\n- 列表项2\n  - 子列表项\n\n[这是一个链接](https://www.example.com)\n\n",
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
          <img src={`/image/avatar1.webp`} className={s.img} />
          {/** 内容框 上下布局 */}
          <div className={s.article_container}>
            <div className={s.title}>{title}</div>
            <p className={s.content}>
              {content.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
            </p>
            <div className={s.info}>
              <span className={s.date}>发布时间:{dayjs(date).format('YYYY-MM-DD')}</span>
              <div className={s.tags}>
                <span className={s.tag}>标签:</span>{tags.map(tag => (
                  <span className={s.tag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}

export default PostCard;
