import Card from '@/components/Card';
import { useTime } from '@/utils/timeUtils';
import { useSelector } from 'react-redux';
import s from "./index.module.scss";

function BlogCard() {

    const { timeText } = useTime();
    const homeState = useSelector((state) => state.r_c_home);


    return (
        <>
            <Card className={s.blog_card}>
                <p className={s.text}>
                    {timeText}，欢迎伟大的
                    <span className={s.color}>{homeState.user_info.user_id}</span>
                    来到
                    <span className={s.color}>沫沫的小窝</span>
                </p>
                <img src={`/image/avatar${homeState.user_info.user_avatar}.webp`} className={s.avatar} />
            </Card>
        </>
    );
};

export default BlogCard;