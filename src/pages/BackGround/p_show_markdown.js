import * as common from '@/utils/common';
import { url_save_article, url_upload } from '@/utils/constant_api';
import { Button, Image, Input, Layout, message, Space, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import MarkdownIt from 'markdown-it';
import { useState } from 'react';
import Editor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import './index.custom.scss';
import styles from './style';
import { UploadOutlined } from '@mui/icons-material';
import BackOperateUpload from './b_p_article_operate_upload';
import BackOperateAddition from './b_p_article_operate_addition';
import { Content, Footer } from 'antd/es/layout/layout';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('');
    const dispatch = useDispatch();

    const handleEditorChange = (value) => {
        setMarkdown(value.text);
    };

    // 标题控制
    const [articleTitle, setArticleTitle] = useState("");
    // 封面控制
    const [articleImage, setArticleImage] = useState("");

    function test(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const insertImageMarkdown = (url) => {
        const imageMarkdown = `![Uploaded Image](${url})\n`;
        setMarkdown((prevMarkdown) => (prevMarkdown ? `${prevMarkdown}\n${imageMarkdown}` : imageMarkdown));
    };

    const { signState } = useSelector(state => state.s_b_home);

    // 提交文章
    function handleBackSubmitArticle() {
        let body = {
            article: markdown,
            title: articleTitle,
            image: articleImage
        }
        console.log("----", body);
        
        common.fetchPost(url_save_article, body, json => {
            message.info("提交成功！")
        }, {}, dispatch)
    }

    return (
        <>
            <div className={classNames(signState !== "1" ? "b_p_home_div_hide" : "", "b_p_home_layout_content")}>
                <BackOperateUpload insertImageToArticle={insertImageMarkdown} />
                <Editor
                    value={markdown}
                    allowPasteImage={true}
                    style={{ height: '1000px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange}
                />

                <BackOperateAddition setArticleImage={setArticleImage} articleTitle={articleTitle} setArticleTitle={setArticleTitle} />
                <div style={styles.b_p_home_markddown_operate_addition_submit}>
                    <Button style={styles.b_p_home_markddown_operate_addition_submit_button}
                        onClick={() => handleBackSubmitArticle()}>发布文章</Button>
                </div>

            </div>

        </>

    );
};

export default MarkdownEditor;