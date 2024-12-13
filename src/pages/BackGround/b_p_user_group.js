import { deleteArticle, deleteUser, getBackUserList } from '@/redux/modules/r_b_home';
import { c_b_sign_state, c_b_user_table, size_config } from '@/utils/constant';
import { Button, message, Space, Table } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import './index.custom.scss';
import CommonAllConfirmModel from '@/components/CommonAll/confirmModel';

const BackUserSetting = () => {
    const { signState, user_list } = useSelector(state => state.r_b_home);
    const [operateObject, setOperateObject] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBackUserList())
    }, [dispatch]);

    // 是否展示分页标签
    const shouldShowPagination = user_list.length >= size_config.articleBackSize;

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const rowSelection = {
        selectedRowKeys,
        selectAll: false,
        onChange: (newSelectedRowKeys) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    // 删除用户
    function handleDeleteUser() {
        setOperateObject(null);
        dispatch(deleteUser(operateObject, json => {
            message.info(json.message);
        }));
    };

    const ArticleOperateColumn = (item) => {
        return (<div>
            <Space>
                <Button size="small" onClick={() => setOperateObject(item.item)}>
                    删除
                </Button>
            </Space>
        </div>);
    };

    return (
        <>
            <div className={classNames(signState !== c_b_sign_state.user_list ? "b_p_home_div_hide" : "")}>
                <Table columns={[
                    ...c_b_user_table,
                    {
                        title: "操作",
                        key: "operate",
                        render: (_text, record, index) => <ArticleOperateColumn item={record} index={index} />
                    }
                ]} dataSource={user_list} bordered={true} pagination={shouldShowPagination ? true : false} rowSelection={rowSelection} fixed rowKey={'id'} />
                <CommonAllConfirmModel title={"确定删除用户么"} content={"删除后不可恢复"} operateObject={operateObject} setOperateObject={setOperateObject} handleOk={handleDeleteUser}/>
            </div>

        </>

    );
};

export default BackUserSetting;