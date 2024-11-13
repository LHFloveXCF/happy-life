import './pagination.custom.scss';
import s from './index.scss';

import { Pagination } from 'antd';
import React from 'react';
import { setNavShow } from '@/redux/actions';
import { useSelector } from 'react-redux';



function MyPagination({setNavShow}) {
  const { data, setPage } = useSelector(state => state.s_home)
  return (
    <>
      {total > defaultPageSize ? (
        <div id='myPagination' className={s.pageBox}>
          <Pagination
            current={data.current}
            total={data.total}
            defaultPageSize={data.defaultPageSize}
            showSizeChanger={false}
            showTitle={false}
            onChange={(page) => {
              setPage?.(page);
              setNavShow?.(false);
            }}
          />
        </div>
      ) : null}
    </>
  );
}

export default MyPagination;