import { url_upload } from '@/utils/constant_api';
import { PlusOutlined } from '@ant-design/icons';
import { Image, message, Upload } from 'antd';
import { useState } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import './index.custom.scss';
import styles from './style';
import API_STATUS from '@/utils/constant_api_status';
import ImgCrop from 'antd-img-crop';

const BackOperateUpload = ({ insertImageToArticle, setArticleImage }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList, file: curFile }) => {
        let updatedFileList = [...newFileList]; 
        if (curFile.status === 'done') {
            const { response } = curFile;     
            if (response.code !== API_STATUS.UPLOAD_SUC) {
                updatedFileList = updatedFileList.filter(item => item.response.url !== response.url);
                updatedFileList.push(curFile);
                message.error(response.message)
            }
            if (typeof insertImageToArticle === 'function') {
                insertImageToArticle(response.url)
            }
            if (typeof setArticleImage === 'function') {
                setArticleImage(response.url.split('/').pop())
            }
        }
        setFileList(updatedFileList)
    };

    const uploadButton = (
        <button style={styles.b_p_home_markddown_operate_upload_button} type="button" >
            <PlusOutlined />
            <div style={{ marginTop: 8 }} >
                插入图片
            </div>
        </button>
    );

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    return (
        <>
            <div style={styles.b_p_home_markddown_operate}>
            <ImgCrop rotationSlider>
                <Upload
                    action={url_upload}
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                </ImgCrop>
                {previewImage && (
                    <Image
                        wrapperStyle={{
                            display: 'none',
                        }}
                        preview={{
                            visible: previewOpen,
                            onVisibleChange: (visible) => setPreviewOpen(visible),
                            afterOpenChange: (visible) => !visible && setPreviewImage(''),
                        }}
                        src={previewImage}
                    />
                )}
            </div>

        </>

    );
};

export default BackOperateUpload;