import { c_b_article_table, c_b_sign_state, size_config } from '@/utils/constant';
import { Button, message, Space, Table } from 'antd';
import classNames from 'classnames';
import 'react-markdown-editor-lite/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import './index.custom.scss';
import styles from "./style";
import { useEffect, useState } from 'react';
import { deleteArticle, getBackArticleList } from '@/redux/modules/r_b_home';

const BackArticleSetting = () => {
    const { signState, article_info_list } = useSelector(state => state.r_b_home);
    const dispatch = useDispatch();



    useEffect(() => {
        if (signState === c_b_sign_state.setting_article) {
            dispatch(getBackArticleList());
        };

    }, [dispatch, signState]);

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
    // 红点行
    const renderDot = (record) => {
        // if (record.withDot) {
        //     return <span className="row-dot" />; // 红点的 HTML 元素
        // }
        return <span style={{ color: 'red', marginRight: 8, fontSize: 16 }}>•</span>;
    };

    const ArticleOperateColumn = (item) => {
        return (<div>
            <Space>
                <div className="custom-button-wrapper">
                    <div className="notification-dot"></div>
                    <Button size="small">
                        查看
                    </Button>
                </div>

                <Button size="small" onClick={() => handleDeleteAtricle(item.item)}>
                    删除
                </Button>
                <Button size="small">
                    隐藏
                </Button>
            </Space>
        </div>);
    };

    const columns = [
        ...c_b_article_table,
        {
            title: "操作",
            key: "operate",
            render: (_text, record, index) => <ArticleOperateColumn item={record} index={index} />
        }
    ];

    const rowClassName = (record) => {
        return 'highlight-row';
    };

    return (
        <>
            <div className={classNames(signState !== c_b_sign_state.setting_article ? "b_p_home_div_hide" : "")}>
                <Table
                    dataSource={article_info_list}
                    columns={[
                        ...c_b_article_table,
                        {
                            title: "操作",
                            key: "operate",
                            render: (_text, record, index) => <ArticleOperateColumn item={record} index={index} />
                        }
                    ]}
                    bordered={true}
                    pagination={shouldShowPagination ? true : false}
                    rowSelection={rowSelection}
                    fixed
                    rowKey={'id'} />
            </div>

        </>

    );
};

export default BackArticleSetting;