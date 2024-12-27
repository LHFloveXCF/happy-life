import React from 'react';
import { List } from 'antd';
import SaySayContent from './c_p_say_content';
import { size_config } from '@/utils/constant';

const SaySayList = ({ sayState }) => {
    const shouldShowPagination = sayState.say.length >= size_config.homeSize;
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={shouldShowPagination ? {
                onChange: (page) => {
                },
                pageSize: size_config.homeSize,
                className: 'custom-pagination'
              } : false}
            dataSource={sayState.say}
            renderItem={(item, index) => (
                <List.Item key={index} style={{"padding": "0px"}}>
                    <SaySayContent item={item} key={index} />
                </List.Item>
            )}
        />
    );
};

export default SaySayList;
