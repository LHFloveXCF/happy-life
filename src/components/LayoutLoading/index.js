import {Skeleton} from 'antd';
import React from 'react';

function LayoutLoading({rows}) {
    return (
        <Skeleton paragraph={{rows}}/>
    )
}

export default LayoutLoading;
