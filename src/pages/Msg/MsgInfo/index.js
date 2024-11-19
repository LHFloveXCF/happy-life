import './index.scss'

import { useTime } from '@/utils/timeUtils';

const mySite = [
    {
        key: 'name',
        value: "myName"
    }
];

function MsgInfo() {

    const { timeText } = useTime();

    return (
        <>
            <div className={"info"}>
                <div>
                    {timeText}，我叫<span className={"hoverName"}>沫沫，欢迎来到我的幸福小窝</span>
                </div>
            </div>
            <div className={"siteLink"}>
                <div className={"link"}>请留下你的足迹吧！</div>
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