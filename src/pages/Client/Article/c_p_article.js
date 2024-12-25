import MarkDown from "@/components/MarkDown";
import useUrlState from '@ahooksjs/use-url-state';
import { useDispatch, useSelector } from "react-redux";

import { imgUrlPrefix } from "@/utils/constant";
import classNames from "classnames";
import { useEffect, useState } from "react";
import '../../../global.custom.scss';
import style from './index.module.scss';
import { addOneArticleMsg, getArticleMsg } from "@/redux/modules/r_c_home";
import { getTimeBetween } from "@/utils/timeUtils";
import { message } from "antd";
import ModalReward from "@/components/Modal/ModalReward";

function ClientArticle() {
    const [search] = useUrlState();
    const homeState = useSelector(state => state.r_c_home);
    const article = homeState.article_info_list.find(item => item.id === Number(search.title));
    const [msgRepeat, setMsgRepeat] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArticleMsg(article.id))
    }, [dispatch]);

    const msg = homeState.article_msg;

    const handleCommitMsg = () => {
        // 用的浏览器本地存储
        let curUser = homeState.user_info.user_real_id;
        if (curUser) {
            dispatch(addOneArticleMsg(article.id, msgRepeat, curUser, article.userId));
        } else {
            message.error("请先登录");
        }
    };

    function getTimeText(time) {
        return getTimeBetween(time).timeText;
    }

    function getTimeStr(time) {
        const date = new Date(time);
        return date.toLocaleTimeString();
    }

    // 打赏弹出框
    const [isModalOpen, setIsModalOpen] = useState(false);
    function handleModalOk() {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={classNames(style.a_s_home, "justify_content_center", "d_flex")}>
                <div className={classNames("all_card", style.a_s_home, style.a_s_main)}>
                    {/**打赏列表 */}
                    <div className={classNames(style.a_s_left_home)}>
                        <div className={classNames(style.a_s_left_content)} onClick={() => setIsModalOpen(true)}>
                            <span className={classNames(style.a_s_reward_home)}>赏</span>
                        </div>
                    </div>
                    <div className={classNames("all_card", style.a_s_content_box)}>
                        <MarkDown className={style.a_s_content_box_content} content={article.content}></MarkDown>
                    </div>
                    {/**评论 */}
                    <div className={classNames("all_card", style.a_s_footer_home)}>
                        <div className={classNames("d_flex", style.a_s_footer_main)}>
                            <div>
                                <img className={classNames(style.a_s_footer_img)} src={`${imgUrlPrefix}1733380822066.webp`} />
                            </div>
                            <div className={classNames(style.a_s_footer_form)}>
                                <textarea className={classNames(style.a_s_footer_form_text)} value={msgRepeat} onChange={(e) => setMsgRepeat(e.target.value)} />
                                <div className={classNames(style.a_s_footer_form_operate_box)}>
                                    <div className={classNames(style.a_s_footer_form_operate_box_l)}>
                                        &nbsp;
                                    </div>
                                    <div className={classNames(style.a_s_footer_form_operate_box_c)}>
                                        &nbsp;
                                    </div>
                                    <div className={classNames(style.a_s_footer_form_operate_box_r)}>
                                        <input type="submit" className={classNames(style.a_s_footer_form_operate_box_item)} value="评论" onClick={handleCommitMsg} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/**评论列表 */}
                    {
                        msg.length !== 0 ? msg.map((msg, index) => (
                            <ul className={classNames("all_card", style.a_s_footer_home, style.a_s_list_home)}>
                                <li>
                                    <div className={classNames("d_flex", style.a_s_footer_main)}>
                                        <div>
                                            <img className={classNames(style.a_s_footer_img)} src={`${imgUrlPrefix}${msg.img}`} />
                                        </div>
                                        <div className={classNames(style.a_s_list_main)}>
                                            {/** 右侧标题 */}
                                            <div className={classNames(style.a_s_list_top_box)}>
                                                <div className={classNames(style.a_s_list_top_box_l)}>
                                                    <span title={getTimeStr(msg.time)}>{getTimeText(msg.time)}</span>
                                                </div>
                                            </div>
                                            {/** 右侧内容 */}
                                            <div className={classNames(style.a_s_list_mid_box)}>
                                                <div className={classNames(style.a_s_list_mid_box)}>
                                                    {msg.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        )) : (<div>暂无评论~ </div>)
                    }

                </div>
                <aside className={classNames("aside")}>
                    <div className={classNames("all_card", style.a_s_aside_main)}>
                        <div>
                            <div className={classNames(style.a_s_aside_img_home)}>
                                <img className={classNames(style.a_s_aside_img_main)} src={`${imgUrlPrefix}${msg.img}`} />
                                <p>描述信息</p>
                            </div>
                            
                        </div>
                    </div>
                </aside>

                <ModalReward isModalOpen={isModalOpen} handleOk={handleModalOk} handleCancel={handleModalOk}></ModalReward>
            </div>


        </>
    );
};
export default ClientArticle;