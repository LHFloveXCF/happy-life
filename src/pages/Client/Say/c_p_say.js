// 说说展示界面
// 打赏弹出框
import HorizontalModel from '@/components/CommonAll/horizontalModel';
import { addOneSay, getSay } from '@/redux/modules/r_c_say';
import classNames from "classnames";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../../global.custom.scss';
import SaySayContent from './c_p_say_content';
import style from './index.module.scss';

function SaySay() {
    const [sayWord, setSayWord] = useState('');
    const homeState = useSelector(state =>  state.r_c_home);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSay());
    }, []);

    const handleSay = () => {
        // 发布说说
        if (homeState.isAuth) {
            const saySay = {
                "userId": 1,
                "content": sayWord,
                "toUserId": 0,
                "avatar": homeState.user_info.user_avatar
            }
            dispatch(addOneSay(saySay));
        } else {
            navigate("/login");
        };
        
    };
    const sayState = useSelector(state => state.r_c_say);
    
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
                                <img src={`/image/avatar${homeState.user_info.user_avatar}.webp`} className={classNames(style.s_content_img)} alt=''></img>
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
                                        <button className={classNames(style.reply_button)} onClick={() => handleSay()} >
                                            {homeState.isAuth ? "发布" : "请登录"}</button>
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
                        {sayState.say.length !== 0 && sayState.say.map((item, index) => (
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
