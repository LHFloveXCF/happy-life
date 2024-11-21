import { useTime } from '@/utils/timeUtils';
import "./index.scss";
import Card from '@/components/Card';
import { useSelector } from 'react-redux';
import Avatar from 'antd/es/avatar/avatar';
import { Space } from 'antd';
import bg3 from '@/imgs/bg3.webp'

function BlogCard() {

    const { timeText } = useTime();
    const homeState = useSelector((state) => state.s_home);


    return (
        <>
            <Card className={"card"}>
                <p className={"text"}>
                    {timeText}，欢迎伟大的<br />
                    <span className={"color"}>{homeState.user_info.user_id}</span><br />
                    来到
                    <span className={"color"}>沫沫的小窝</span>
                </p>
                {/* <img src={cardUrl} className={"avatar"} /> */}
            </Card>
        </>
    );
};

export default BlogCard;