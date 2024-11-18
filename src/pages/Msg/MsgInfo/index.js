import './index.scss'

import { useTime } from '@/utils/timeUtils';

const mySite = [
    {
        key: 'name',
        value: "myName"
    },
    {
        key: 'link',
        value: "myLink"
    },
    {
        key: 'avatar',
        value: "myAvatar"
    },
    {
        key: 'descr',
        value: "myDescr"
    }
];

function MsgInfo() {

    const { timeText } = useTime();

    return (
        <>
            <div className={"info"}>
                <div>
                    {timeText}，我叫<span className={"hoverName"}>飞鸟</span>，
                </div>
                <div>欢迎来到我的博客!</div>
                <div>可以在这里留言、吐槽，</div>
                <div className={"hoverName"}>交换友链。</div>
            </div>
            <div className={"siteLink"}>
                <div className={"link"}>本站链接：</div>
                {mySite.map(
                    (
                        item,
                        index
                    ) => (
                        <div key={index}>
                            <span>{item.key}:</span>
                            <span className={"value"}>{item.value}</span>
                        </div>
                    )
                )}
            </div>
        </>
    )
};

export default MsgInfo;