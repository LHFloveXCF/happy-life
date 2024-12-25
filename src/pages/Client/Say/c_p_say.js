// 说说展示界面
// 打赏弹出框
import { imgUrlPrefix } from '@/utils/constant';
import classNames from "classnames";
import '../../../global.custom.scss';
import SaySayContent from './c_p_say_content';
import style from './index.module.scss';

function SaySay({ isModalOpen, handleOk, handleCancel }) {
    const says = [
        {
            "img": `${imgUrlPrefix}1733380822066.webp`,
            "content": "content-mid",
            "userName": "content-mid",
            "userId": 1,
            "replay": [
                {
                    "img": `${imgUrlPrefix}1733380822066.webp`,
                    "content": "content-mid",
                    "userName": "content-mid",
                }
            ],

        },
        {
            "img": `${imgUrlPrefix}1733380822066.webp`,
            "content": "content-mid",
            "userName": "content-mid",
            "userId": 1,
            "replay": [
                {
                    "img": `${imgUrlPrefix}1733380822066.webp`,
                    "content": "content-mid",
                    "userName": "content-mid",
                }
            ],

        }
    ];

    return (
        <>
            <div className={classNames(style.s_home)}>
                <div className={classNames(style.s_top)}>
                    说说
                </div>
                <div className={classNames(style.s_mid)}>
                    <div className={classNames(style.s_content_home)}>
                        {says.length !== 0 && says.map((item, index) => (
                            <SaySayContent item={item}></SaySayContent>
                        ))}
                    </div>
                </div>
                <div>
                    footer
                </div>
            </div>
        </>

    )
}

export default SaySay;
