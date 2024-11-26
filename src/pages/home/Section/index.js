import s from './index.module.scss';

import { useSafeState } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import MyPagination from '@/components/MyPagination';
import { homeSize } from '@/utils/constant';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';




function Section({artSum}) {
  const navigate = useNavigate();
  const [page, setPage] = useSafeState(1);

  const homeState = useSelector(state => state.s_home);  
  console.log("homeState, ", homeState);
  

  

  return (
    <section className={s.section}>
      {homeState.article_info_list.map((item, index) => (
        <PostCard loading={false} article={item} key={index}/>
      ))}
      <MyPagination
        current={page}
        defaultPageSize={homeSize}
        total={artSum}
        setPage={setPage}
        autoScroll={true}
        scrollToTop={document.body.clientHeight - 80}
      />
    </section>
  );
}

export default Section;
