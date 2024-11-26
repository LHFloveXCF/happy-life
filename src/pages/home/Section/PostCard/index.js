import dayjs from 'dayjs';
import React, { MouseEventHandler } from 'react';

import Card from '@/components/Card';

import s from './index.module.scss';
import PostCardLoading from './PostCardLoading';
import LikeOrNo from '@/components/LikeAndUnLike';
import { useDispatch } from 'react-redux';
import {updateArticleLikeCount} from '@/redux/modules/s_home'

function PostCard({ loading, article }) {

  console.log("article", article);
  

  const dispatch = useDispatch();

  const onClick = (type) => {
  }

  const changeLikeCount = (type) => {
    console.log("type: ", type);
    dispatch(updateArticleLikeCount(1))
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
            <div className={s.title}>{article.title}</div>
            <p className={s.content}>
              {article.content.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
            </p>
            <div className={s.info}>
              <LikeOrNo likeCount={article.like} disLikeCount={article.like} changeCount={changeLikeCount} classNmae={s.info} />
              <span className={s.date}>{dayjs(article.date).format('YYYY-MM-DD')}</span>
              <div className={s.tags}>
                {article.tags.map(tag => (
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
