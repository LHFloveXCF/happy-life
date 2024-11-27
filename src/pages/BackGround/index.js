import MarkdownIt from 'markdown-it';
import { useRef, useState } from 'react';
import Editor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './index.custom.scss';
import { url_upload } from '@/utils/constant_api';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@mui/icons-material';
import axios from 'axios';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('');
    const fileInputRef = useRef(null);

    const handleEditorChange = (value) => {
        setMarkdown(value.text);
    };

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    const handleImageUpload = async (info) => {        
        if (info.fileList.length === 0) return;
        const file = info.fileList[0];
        
        const formData = new FormData();
        formData.append('file', info.file);
        console.log("fileInput, ", info.file);
        try {
            const response = await fetch(url_upload, {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            const imageUrl = result.url; 
            insertImageMarkdown(imageUrl);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const [uploadUrl, setUploadUrl] = useState(url_upload); 
    const [fileList, setFileList] = useState([]);
   
    const props = {
      onRemove: (file) => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        setFileList(newFileList);
      },
      beforeUpload: (file) => {
        setFileList(prev => [...prev, file]);
        const formData = new FormData();
        formData.append('file', file);
   
        axios.post(uploadUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
            insertImageMarkdown(response.data.url);
            setFileList([]);
        })
        .catch(error => {
        });
   
        // 阻止自动上传
        return false;
      },
      fileList
    };

    const insertImageMarkdown = (url) => {
        const currentText = markdown;
        const imageMarkdown = `![Uploaded Image](${url})\n`;
        setMarkdown((prevMarkdown) => (prevMarkdown ? `${prevMarkdown}\n${imageMarkdown}` : imageMarkdown));
    };

    return (
        <>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <Editor
                value={markdown}
                allowPasteImage={true}
                style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange}
            />
        </>

    );
};

export default MarkdownEditor;