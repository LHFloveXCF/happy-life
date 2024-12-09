import * as common from '@/utils/common';
import { url_save_article } from '@/utils/constant_api';
import { UploadOutlined } from '@mui/icons-material';
import { Button, Input, message, Space, Upload } from 'antd';
import MarkdownIt from 'markdown-it';
import { useRef, useState } from 'react';
import Editor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import './index.custom.scss';
import styles from './style';
import classNames from 'classnames';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('');
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();

    const handleEditorChange = (value) => {
        setMarkdown(value.text);
    };

    // 标题控制
    const [articleTitle, setArticleTitle] = useState("");
    // 封面控制
    const [articleImage, setArticleImage] = useState("");
    const handleTitleImageUpload = (file) => {
        common.uploadImage(file, (imageUrl) => {            
            setArticleImage(imageUrl.split('/').pop())
        })
    }

    function test(e) {
        console.log("variableName:", e.target.value);
    }

    const mdParser = new MarkdownIt(/* Markdown-it options */);
    // 内容图片上传
    const [fileList, setFileList] = useState([]);
    const handleContentImageUpload = (file) => {
        common.uploadImage(file, (imageUrl) => {
            insertImageMarkdown(imageUrl);
            setFileList([]);
        })

    };
    const insertImageMarkdown = (url) => {
        const imageMarkdown = `![Uploaded Image](${url})\n`;
        setMarkdown((prevMarkdown) => (prevMarkdown ? `${prevMarkdown}\n${imageMarkdown}` : imageMarkdown));
    };

    const props = {
        maxCount: 1,
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        fileList
    };

    const {signState} = useSelector(state => state.s_b_home);
    
    // 提交文章
    function handleBackSubmitArticle() {
        let body = {
            article: markdown,
            title: articleTitle,
            image: articleImage
        }
        common.fetchPost(url_save_article, body, json => {
            message.info("提交成功！")
        }, {}, dispatch)
    }

    return (
        <>
            <div className={classNames(signState !== "1" ? "b_p_home_div_hide" : "")}>
                <div>
                    <Space.Compact style={{ width: '100%' }}>
                        <Input addonBefore="标题：" value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} />
                        <Button type="primary">Submit</Button>
                    </Space.Compact>
                </div>
                <div style={styles.b_p_home_markddown_operate}>
                    <Upload {...props} beforeUpload={(e) => handleContentImageUpload(e)}>
                        <Button icon={<UploadOutlined />}>插入图片</Button>
                    </Upload>
                    <Upload maxCount={1} beforeUpload={(e) => handleTitleImageUpload(e)}>
                        <Button icon={<UploadOutlined />}>添加封面</Button>
                    </Upload>
                    <Button onClick={() => handleBackSubmitArticle()}>发布文章</Button>
                </div>

                <Editor
                    value={markdown}
                    allowPasteImage={true}
                    style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange}
                />
            </div>

        </>

    );
};

export default MarkdownEditor;