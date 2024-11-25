import s from './index.module.scss';

import { Skeleton } from 'antd';
import classNames from 'classnames';




function Card({className, loading, children, isStatic, onClick}) {
  return (
    <div
      className={classNames(
        s.card,
        className
      )}
      onClick={onClick}
    >
      {loading ? <Skeleton paragraph={{ rows: 1 }} /> : children}
    </div>
  );
}

export default Card;
