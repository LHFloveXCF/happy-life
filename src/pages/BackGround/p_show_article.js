import { c_b_article_table, c_b_sign_state, size_config } from '@/utils/constant';
import { Button, Space, Table } from 'antd';
import classNames from 'classnames';
import 'react-markdown-editor-lite/lib/index.css';
import { useSelector } from 'react-redux';
import './index.custom.scss';

const BackArticleSetting = () => {
    const homeState = useSelector(state => state.s_home);
    const { signState } = useSelector(state => state.s_b_home);


    const shouldShowPagination = homeState.article_info_list.length >= size_config.articleBackSize;

    const ArticleOperateColumn = (item) => {
        return (<div>
            <Space>
                <Button size="small">
                    查看
                </Button>
                <Button size="small">
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
                ]} dataSource={homeState.article_info_list} bordered={true} pagination={shouldShowPagination ? true : false} rowSelection fixed />
            </div>

        </>

    );
};

export default BackArticleSetting;