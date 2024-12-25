// 说说展示界面
// 打赏弹出框
import { imgUrlPrefix } from '@/utils/constant';
import classNames from "classnames";
import '../../../global.custom.scss';
import SaySayContent from './c_p_say_content';
import style from './index.module.scss';
import HorizontalModel from '@/components/CommonAll/horizontalModel';
import { useState } from 'react';

function SaySay() {
    const [sayWord, setSayWord] = useState('');
    const handleSay = () => {
        // 发布说说
        
    };
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
                {/** 发布新说说 */}
                <div className={classNames(style.s_mid)}>
                    <div className={classNames(style.s_content_home)}>
                        <div className={classNames("all_card", style.s_content_main)}>
                            <div className={classNames(style.s_content_l)}>
                                <img src={`${imgUrlPrefix}1733380822066.webp`} className={classNames(style.s_content_img)} alt=''></img>
                            </div>
                            <div className={classNames(style.s_content_mid)}>
                                {/** 发布区域 */}
                                <div className={classNames(style.s_content_footer)}>
                                    <textarea
                                        value={sayWord}
                                        onChange={(e) => setSayWord(e.target.value)}
                                        className={classNames(style.s_c_replay_expanded_input)}
                                    />
                                    <div className={classNames(style.s_c_replay_home)}>
                                        <button className={classNames(style.reply_button)} onClick={() => handleSay} >
                                            发布</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <HorizontalModel/>
                    </div>
                </div>
                {/**历史信息 */}
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
