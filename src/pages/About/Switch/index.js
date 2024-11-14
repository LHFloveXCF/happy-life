import './index.scss';

import classNames from 'classnames';
import React from 'react';




function Switch({state, toggle, setLeft, setRight}) {
  return (
    <div className={"switch"}>
      <div
        className={classNames("site", { ["titleOff"]: state })}
        onClick={() => setLeft()}
      >
        关于本站
      </div>
      <div className={"box"} onClick={() => toggle()}>
        <div className={classNames("btn", { ["isMe"]: state })} />
      </div>
      <div
        className={classNames("me", { ["titleOff"]: !state })}
        onClick={() => setRight()}
      >
        关于我
      </div>
    </div>
  );
}

export default Switch;
