import CommonAllConfirmModel from '@/components/CommonAll/confirmModel';
import { deleteImage, getBackImageList, showImage } from '@/redux/modules/r_b_home';
import { c_b_image_table, c_b_sign_state, size_config } from '@/utils/constant';
import { Button, message, Space, Table } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import BackImageModal from './b_p_file_show_image_modal';
import './index.custom.scss';


const BackImageSetting = () => {
    const dispatch = useDispatch();
    const { signState, image_list } = useSelector(state => state.r_b_home);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [operateObject, setOperateObject] = useState(null);

    useEffect(() => {
        if (signState === c_b_sign_state.file_image) {
            dispatch(getBackImageList());
        };

    }, [dispatch, signState]);



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

    const handleDelete = () => {
        setOperateObject(null);
        dispatch(deleteImage(operateObject, json => {
            message.info(json.message);
        }));
    };

    const handleShowImage = (image) => {
        setIsModalOpen(true);
        dispatch(showImage(image));
    };

    const ImageOperateColumn = (item) => {
        return (<div>
            <Space>
                <Button size="small" onClick={() => handleShowImage(item.item)}>
                    查看
                </Button>
                <Button size="small" onClick={() => setOperateObject(item.item)}>
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
                <BackImageModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                <CommonAllConfirmModel title={"确定要删除这张图片吗"} content={"删除后文件不可恢复！"} operateObject={operateObject} setOperateObject={setOperateObject} handleOk={handleDelete} />
            </div>

        </>

    );
};

export default BackImageSetting;