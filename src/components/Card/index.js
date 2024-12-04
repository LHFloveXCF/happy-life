import s from './index.module.scss';

import { Skeleton } from 'antd';
import classNames from 'classnames';




function Card({className, loading, children, isStatic, onClick, article}) {
  return (
    <div
      className={classNames(
        s.card,
        className
      )}
      onClick={() => onClick(article.id, article.userId)}
    >
      {loading ? <Skeleton paragraph={{ rows: 1 }} /> : children}
    </div>
  );
}

export default Card;
