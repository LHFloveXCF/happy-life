import { c_b_article_table, c_b_sign_state, homeSize, size_config } from '@/utils/constant';
import classNames from 'classnames';
import 'react-markdown-editor-lite/lib/index.css';
import './index.custom.scss';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

const BackArticleSetting = () => {
    const homeState = useSelector(state => state.s_home);
    const {signState} = useSelector(state => state.s_b_home);


    const shouldShowPagination = homeState.article_info_list.length >= size_config.articleBackSize;

    return (
        <>
            <div className={classNames(signState !== c_b_sign_state.setting_article ? "b_p_home_div_hide" : "")}>
                <Table columns={c_b_article_table} dataSource={homeState.article_info_list} bordered={true} pagination={shouldShowPagination ? true : false}/>
            </div>

        </>

    );
};

export default BackArticleSetting;