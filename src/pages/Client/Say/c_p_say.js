// 说说展示界面
// 打赏弹出框
import style from './index.module.scss';
import '../../../global.custom.scss';
import classNames from "classnames";
import { imgUrlPrefix } from '@/utils/constant';
import { useState } from 'react';

function SaySay({ isModalOpen, handleOk, handleCancel }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const says = [
        {
            "img": `${imgUrlPrefix}1733380822066.webp`,
            "content": "content-mid",
            "userName": "content-mid",
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
                        {says.length !== 0 && says.map((item, index) => (<div className={classNames("all_card", style.s_content_main)}>
                            <div className={classNames(style.s_content_l)}>
                                <img src={item.img} className={classNames(style.s_content_img)} alt=''></img>
                            </div>
                            <div className={classNames(style.s_content_mid)}>
                                <div className={classNames(style.s_c_detail_home)}>
                                    <div className={classNames(style.s_c_detail_mid)}>
                                        {item.content}
                                    </div>
                                    {item.replay.length !== 0 && item.replay.map((item, index) => (
                                        <div className={classNames(style.s_c_detail_footer)}>
                                            <div className={classNames(style.s_content_l)}>
                                                <img src={item.img} className={classNames(style.s_c_detail_img)} alt=''></img>
                                            </div>
                                            <div className={classNames(style.s_c_detail_r)} >
                                                {item.content}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/** 回复区域 */}
                                {isExpanded ? (
                                    <div className={classNames(style.s_content_footer)}>
                                        <textarea
                                            value=""
                                            // onChange={handleReplyChange}
                                            className={classNames(style.s_c_replay_expanded_input)}
                                        />
                                        <div className={classNames(style.s_c_replay_home)}>
                                            <button className={classNames(style.reply_button)} onClick={() => setIsExpanded(false)}>回复</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={classNames(style.s_content_footer)}>
                                        <input
                                            type="text"
                                            onClick={() => setIsExpanded(true)}
                                            placeholder="写下你的回复..."
                                            className={classNames(style.s_c_replay_collapsed_input)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>))}
                    </div>
                </div>
                <div className={classNames(style.bordered_div)}>
                    footer
                </div>
            </div>
        </>

    )
}

export default SaySay;
