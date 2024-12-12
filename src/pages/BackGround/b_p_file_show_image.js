import { deleteArticle, deleteImage, getBackImageList } from '@/redux/modules/r_b_home';
import { c_b_image_table, c_b_sign_state, size_config } from '@/utils/constant';
import { Button, message, Space, Table } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import './index.custom.scss';

const BackImageSetting = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBackImageList())
    }, [dispatch]);

    const { signState, image_list } = useSelector(state => state.r_b_home);

    // 是否展示分页标签
    const shouldShowPagination = image_list.length >= size_config.articleBackSize;

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const rowSelection = {
        selectedRowKeys,
        selectAll: false,
        onChange: (newSelectedRowKeys) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    // 删除图片
    function handleDeleteImage(image) {
        dispatch(deleteImage(image, json => {
            message.info(json.message);
        }));
    };

    const ImageOperateColumn = (item) => {
        return (<div>
            <Space>
                <Button size="small">
                    查看
                </Button>
                <Button size="small" onClick={() => handleDeleteImage(item.item)}>
                    删除
                </Button>
            </Space>
        </div>);
    };

    return (
        <>
            <div className={classNames(signState !== c_b_sign_state.file_image ? "b_p_home_div_hide" : "")}>
                <Table columns={[
                    ...c_b_image_table,
                    {
                        title: "操作",
                        key: "operate",
                        render: (_text, record, index) => <ImageOperateColumn item={record} index={index} />
                    }
                ]} dataSource={image_list} bordered={true} pagination={shouldShowPagination ? true : false} rowSelection={rowSelection} fixed rowKey={'id'} />
            </div>

        </>

    );
};

export default BackImageSetting;