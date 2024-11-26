import './index.scss';

import { siteTitle } from '@/utils/constant';
import { useTitle } from 'ahooks';
import classNames from 'classnames';
import Card from '../Card';
import LayoutLoading from '../LayoutLoading';
import PageTitle from '../PageTitle';


function Layout({ title, isPost = false, date, classes, loading, rows, children }) {

  useTitle(`${siteTitle} | ${title || ''}`);

  return (
    <>
      <PageTitle title={title} className={classNames(classes, { ["postTitle"]: isPost })} />
      <Card isStatic={true} className={classNames("layoutCard", classes)}>
        {loading ? <LayoutLoading rows={rows} /> : children}
      </Card>
    </>
  );
}

export default Layout;
