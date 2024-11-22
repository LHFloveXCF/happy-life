import './index.scss';

import { Skeleton } from 'antd';
import classNames from 'classnames';




function Card({className, loading, children, isStatic, onClick}) {
  return (
    <div
      className={classNames(
        "card",
        className
      )}
      onClick={onClick}
    >
      {loading ? <Skeleton paragraph={{ rows: 1 }} /> : children}
    </div>
  );
}

export default Card;
