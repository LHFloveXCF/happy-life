import { imgUrlPrefix } from '@/utils/constant';
import { Modal } from 'antd';
import 'react-markdown-editor-lite/lib/index.css';
import { useSelector } from 'react-redux';
import './index.custom.scss';
import styles from './style';


const BackImageModal = ({isModalOpen, setIsModalOpen}) => {
    const {image_cur} = useSelector(state => state.r_b_home);
    return (
        <>
            <Modal title="照片预览" open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null} closeIcon={null}>
                <div style={styles.b_p_file_show_img_container}>
                    <img style={styles.b_p_file_show_img} src={`${imgUrlPrefix}${image_cur.path}`} alt="照片" />
                </div>
            </Modal>

        </>

    );
};

export default BackImageModal;