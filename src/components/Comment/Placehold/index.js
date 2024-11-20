import React from 'react';

import './index.scss';

function Placehold({msgCount, isMsg}) {
  return (
    <>
      {msgCount ? (
        <div className={"hasMag"}>
          {msgCount}条{isMsg ? '留言' : '评论'}
        </div>
      ) : (
        <div className={"noMag"}>暂时没有{isMsg ? '留言' : '评论'}&nbsp;~</div>
      )}
    </>
  );
}

export default Placehold;
