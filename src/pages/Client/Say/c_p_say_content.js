
import classNames from "classnames";
import { useState } from 'react';
import style from './index.module.scss';
import '../../../global.custom.scss';
// 说说界面-内容组件
function SaySayContent({ item }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [userId, setUserId] = useState(0);
    const [replay, setReplay] = useState("");

    const handleExpanded = (userId, isExpanded) => {
        setIsExpanded(isExpanded);
        setUserId(userId);
    };

    const handReplay = () => {
        // 回复说说
        
    };
    return (
        <>
            <div className={classNames("all_card", style.s_content_main)}>
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
                                <div className={classNames(style.s_c_detail_l)}>
                                    <img src={item.img} className={classNames(style.s_c_detail_img)} alt=''></img>
                                </div>
                                <div className={classNames(style.s_c_detail_r)} >
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/** 回复区域 */}
                    {isExpanded && userId == item.userId ? (
                        <div className={classNames(style.s_content_footer)}>
                            <textarea
                                value={replay}
                                onChange={(e) => setReplay(e.target.value)}
                                className={classNames(style.s_c_replay_expanded_input)}
                            />
                            <div className={classNames(style.s_c_replay_home)}>
                                <button className={classNames(style.reply_button)} onClick={() => handleExpanded(item.userId, false)}>回复</button>
                            </div>
                        </div>
                    ) : (
                        <div className={classNames(style.s_content_footer)}>
                            <input
                                type="text"
                                onClick={() => handleExpanded(item.userId, true)}
                                placeholder="写下你的回复..."
                                className={classNames(style.s_c_replay_collapsed_input)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SaySayContent;