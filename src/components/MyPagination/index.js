import './pagination.custom.scss';
import './index.scss';

import { Pagination } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeSize } from '@/utils/constant';
import {updateCurrentPage} from '@/redux/modules/s_home';



function MyPagination({setNavShow}) {
  const homeState = useSelector(state => state.s_home);
  console.log("variableName:", homeState.article_info_list);
  
  const dispatch = useDispatch();

  const updatePage = (curPage) => {
    dispatch(updateCurrentPage(curPage))
  }


  return (
    <>
      {homeState.article_info_list.length > homeSize ? (
        <div id='myPagination' className={"pageBox"}>
          <Pagination
            current={homeState.data.current}
            total={homeState.article_info_list.length}
            defaultPageSize={homeSize}
            showSizeChanger={false}
            showTitle={false}
            onChange={(page) => {
              updatePage(page);
              setNavShow?.(false);
            }}
          />
        </div>
      ) : null}
    </>
  );
}

export default MyPagination;