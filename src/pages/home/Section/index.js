import './index.scss';

import { useSafeState } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import MyPagination from '@/components/MyPagination';
import { homeSize } from '@/utils/constant';




function Section({artSum}) {
  const navigate = useNavigate();
  const [page, setPage] = useSafeState(1);

  

  return (
    <section className={"section"}>
      <p>TEST</p>
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