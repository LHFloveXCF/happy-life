// 打赏弹出框
import style from './index.module.scss';
import { imgUrlPrefix } from '@/utils/constant';
import { Modal } from 'antd';
import classNames from 'classnames';

function ModalReward({ isModalOpen, handleOk, handleCancel }) {
    return (
        <>
            <Modal title="打赏" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} width={720} style={{
                top: 300,
            }}>
                <div className={classNames(style.m_home)}>
                    <img className={classNames(style.m_img)} src={`${imgUrlPrefix}1733380822066.webp`} alt=''></img>
                    <img className={classNames(style.m_img)} src={`${imgUrlPrefix}1733380822066.webp`} alt=''></img>
                </div>
                <div>
                    <span className={classNames(style.m_greet)}>您的支持是对我最大的鼓励!!!</span>
                </div>
            </Modal>
        </>

    )
}

export default ModalReward;
