import * as common from '@/utils/common';
import { url_save_article } from '@/utils/constant_api';
import { Button, message } from 'antd';
import classNames from 'classnames';
import MarkdownIt from 'markdown-it';
import { useEffect, useState } from 'react';
import Editor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import BackOperateAddition from './b_p_article_operate_addition';
import BackOperateUpload from './b_p_article_operate_upload';
import './index.custom.scss';
import styles from './style';
import { useNavigate } from 'react-router-dom';

const MarkdownEditor = ({article}) => {
    const [markdown, setMarkdown] = useState('');
    // 标题控制
    const [articleTitle, setArticleTitle] = useState("");
    // 封面控制
    const [articleImage, setArticleImage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (article) {
            setMarkdown(article.content);
        }
    }, [article]);

    function initAllState() {
        setMarkdown("");
        setArticleImage("");
        setArticleTitle("");
    };

    // 内容变更
    const handleEditorChange = (value) => {
        setMarkdown(value.text);
    };

    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const insertImageMarkdown = (url) => {
        const imageMarkdown = `![Uploaded Image](${url})\n`;
        setMarkdown((prevMarkdown) => (prevMarkdown ? `${prevMarkdown}\n${imageMarkdown}` : imageMarkdown));
    };

    const { signState } = useSelector(state => state.r_b_home);

    // 提交文章
    function handleBackSubmitArticle() {
        let body = {
            article: markdown,
            title: articleTitle,
            image: articleImage
        }        
        common.fetchPost(url_save_article, body, json => {
            message.info("提交成功！");
            initAllState();
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