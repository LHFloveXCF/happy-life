import { deleteImage, getBackImageList } from '@/redux/modules/r_b_home';
import { c_b_image_table, c_b_sign_state, imgUrlPrefix, size_config } from '@/utils/constant';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, message, Modal, Space, Table } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import './index.custom.scss';
import styles from './style';


const BackImageSetting = () => {
    const { confirm } = Modal;
    const dispatch = useDispatch();
    const { signState, image_list } = useSelector(state => state.r_b_home);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imagePath, setImagePath] = useState("");

    useEffect(() => {
        dispatch(getBackImageList())
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

    const showPromiseConfirm = (image) => {
        confirm({
            title: '确定要删除这张图片吗',
            icon: <ExclamationCircleFilled />,
            content: '删除后文件不可恢复！',
            onOk() {
                dispatch(deleteImage(image, json => {
                    message.info(json.message);
                }));
            },
            onCancel() { },
        });
    };

    const handleShowImage = (image) => {

        setIsModalOpen(true);

        setImagePath(`${imgUrlPrefix}${image.path}`)
    };

    const ImageOperateColumn = (item) => {
        return (<div>
            <Space>
                <Button size="small" onClick={() => handleShowImage(item.item)}>
                    查看
                </Button>
                <Button size="small" onClick={() => showPromiseConfirm(item.item)}>
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
                <Modal title="照片预览" open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null} closeIcon={null}>
                    <div style={styles.b_p_file_show_img_container}>
                        <img  style={styles.b_p_file_show_img} src={imagePath} alt="照片" />
                    </div>
                </Modal>
            </div>

        </>

    );
};

export default BackImageSetting;