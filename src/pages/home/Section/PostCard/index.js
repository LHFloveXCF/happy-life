import dayjs from 'dayjs';
import React, { MouseEventHandler } from 'react';

import Card from '@/components/Card';

import s from './index.module.scss';
import PostCardLoading from './PostCardLoading';
import LikeOrNo from '@/components/LikeAndUnLike';
import { useDispatch } from 'react-redux';
import { updateArticleLikeCount } from '@/redux/modules/s_home'
import { useNavigate } from 'react-router-dom';
import { imgUrlPrefix } from '@/utils/constant';

function PostCard({ loading, article }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = (articleId, userId) => {
    navigate(`/post?title=${encodeURIComponent(articleId)}`)
  }

  const changeLikeCount = (type, id) => {
    dispatch(updateArticleLikeCount({ "id": id, "type": type }))
  }

  return (
    <Card className={s.section_card} isStatic={true}>
      {loading ? (
        <PostCardLoading />
      ) : (
        <>
          <img src={`${imgUrlPrefix}${article.icon}`} className={s.img} />
          {/** 内容框 上下布局 */}
          <div className={s.article_container}>
            
            <div onClick={() => onClick(article.id, article.userId)}>
              <div className={s.title}>{article.title}</div>
              <p className={s.content}>
                {article.content.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
              </p>
            </div>

            <div className={s.c_home_article_show_operate}>
              <LikeOrNo likeCount={article.like} disLikeCount={article.disLike} articleId={article.id} changeCount={changeLikeCount} classNmae={s.c_home_article_show_operate} />
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
