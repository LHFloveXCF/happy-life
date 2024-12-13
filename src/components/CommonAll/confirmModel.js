import { Modal } from 'antd';
import 'react-markdown-editor-lite/lib/index.css';

/**
 * 通用提示确认框
 * 传入参数：标题、提示内容、确定后参数
 * operateObject: 通过这个对象是否为空，来控制弹出框的显示；调用方根据这个操作对象执行后序的逻辑；
 * setOperateObject: 设置操作对象
 * 
 */
const CommonAllConfirmModel = ({ operateObject, setOperateObject, title, content, handleOk }) => {
    return (
        <>
            <Modal title={title} onOk={handleOk} open={operateObject !== null} onCancel={() => setOperateObject(null)} closeIcon={null} >
                <p>{content}</p>
            </Modal>
        </>
    );
};

export default CommonAllConfirmModel;