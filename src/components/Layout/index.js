import './index.scss';

import { siteTitle } from '@/utils/constant';
import { useTitle } from 'ahooks';
import classNames from 'classnames';
import dayjs from 'dayjs';
import PageTitle from '../PageTitle';
import Card from '../Card';
import LayoutLoading from '../LayoutLoading';


function Layout({ title, isPost = false, date, classes, loading, rows, children }) {

  useTitle(`${siteTitle} | ${title || ''}`);

  return (
    <>
      <PageTitle title={title} className={classNames({ ["postTitle"]: isPost })} />
      <Card isStatic={true} className={classNames("layoutCard")}>
        {loading ? <LayoutLoading rows={rows} /> : children}
      </Card>
    </>
  );
}

export default Layout;
