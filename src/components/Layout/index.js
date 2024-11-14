import {useTitle} from 'ahooks';
import classNames from 'classnames';
import dayjs from 'dayjs';
import React from 'react';

import {setNavShow} from '@/redux/actions';
import {siteTitle} from '@/utils/constant';
import useTop from '@/utils/hooks/useTop';

import Card from '../Card';
import LayoutLoading from '../LayoutLoading';
import PageTitle from '../PageTitle';
import s from './index.scss';


function Layout() {

  useTitle(`${siteTitle} | ${title || ''}`);

  useTop(setNavShow!);
  return (
      <>
        <PageTitle title={title} className={classNames({ [s.postTitle]: isPost })}>
          {isPost && (
              <div>
                <span className={s.articleClass}>{classes}</span>
                <span className={s.articleDate}>
              {dayjs(date).format('YYYY-MM-DD HH:mm:ss')}
            </span>
              </div>
          )}
        </PageTitle>
        <Card isStatic={true} className={classNames(s.layoutCard, className)}>
          {loading ? <LayoutLoading rows={rows} /> : children}
        </Card>
      </>
  );
}

export default Layout;
