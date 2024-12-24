import s from './index.module.scss';

import { size_config } from '@/utils/constant';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import PostCard from './PostCard';




function Section({ artSum }) {
  const homeState = useSelector(state => state.r_c_home);
  const shouldShowPagination = homeState.article_info_list.length >= size_config.homeSize;


  return (
    <section className={s.section}>
      <List
        itemLayout="vertical"
        size="large"
        pagination={shouldShowPagination ? {
          onChange: (page) => {
          },
          pageSize: size_config.homeSize,
        } : false}
        dataSource={homeState.article_info_list}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <PostCard loading={false} article={item} key={index} />
          </List.Item>
        )}
      />
    </section>
  );
}

export default Section;
