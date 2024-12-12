import { c_b_article_table, c_b_sign_state, size_config } from '@/utils/constant';
import { Button, message, Space, Table } from 'antd';
import classNames from 'classnames';
import 'react-markdown-editor-lite/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import './index.custom.scss';
import { useEffect, useState } from 'react';
import { deleteArticle, getBackArticleList } from '@/redux/modules/r_b_home';

const BackUserSetting = () => {
    const { signState, article_info_list } = useSelector(state => state.r_b_home);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBackArticleList())
    }, [dispatch]);

    // 是否展示分页标签
    const shouldShowPagination = article_info_list.length >= size_config.articleBackSize;

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const rowSelection = {
        selectedRowKeys,
        selectAll: false,
        onChange: (newSelectedRowKeys) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    // 删除文章
    function handleDeleteAtricle(article) {
        dispatch(deleteArticle(article, json => {
            message.info(json.message);
        }));
    };

    const ArticleOperateColumn = (item) => {
        return (<div>
            <Space>
                <Button size="small">
                    查看
                </Button>
                <Button size="small" onClick={() => handleDeleteAtricle(item.item)}>
                    删除
                </Button>
                <Button size="small">
                    隐藏
                </Button>
            </Space>
        </div>);
    };

    return (
        <>
            <div className={classNames(signState !== c_b_sign_state.setting_article ? "b_p_home_div_hide" : "")}>
                <Table columns={[
                    ...c_b_article_table,
                    {
                        title: "操作",
                        key: "operate",
                        render: (_text, record, index) => <ArticleOperateColumn item={record} index={index} />
                    }
                ]} dataSource={article_info_list} bordered={true} pagination={shouldShowPagination ? true : false} rowSelection={rowSelection} fixed rowKey={'id'} />
            </div>

        </>

    );
};

export default BackUserSetting;