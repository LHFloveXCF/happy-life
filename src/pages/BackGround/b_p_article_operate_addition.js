import { url_upload } from '@/utils/constant_api';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Input, message, Upload } from 'antd';
import { useState } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import './index.custom.scss';
import styles from './style';
import BackOperateUpload from './b_p_article_operate_upload';

const BackOperateAddition = ({ setArticleImage, articleTitle, setArticleTitle }) => {

    return (
        <>
            <div style={styles.b_p_home_markddown_operate_addition}>
                <div style={styles.b_p_home_markddown_operate_addition_container}>
                    <label style={styles.b_p_home_markddown_operate_addition_label}><span>文章标题：</span></label>
                    <div>
                        <Input value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)}/>
                    </div>
                </div>
                <div style={styles.b_p_home_markddown_operate_addition_container}>
                    <label style={styles.b_p_home_markddown_operate_addition_label}><span>文章封面：</span></label>
                    <div>
                        <BackOperateUpload setArticleImage={setArticleImage}/>
                    </div>
                </div>
                <div style={styles.b_p_home_markddown_operate_addition_container}>
                    <label style={styles.b_p_home_markddown_operate_addition_label}><span>文章标签：</span></label>
                    <div>
                        <Input />
                    </div>
                </div>
            </div>

        </>

    );
};

export default BackOperateAddition;