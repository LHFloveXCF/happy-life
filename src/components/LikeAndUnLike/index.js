import { DislikeTwoTone, LikeTwoTone } from '@ant-design/icons';
import s from './index.module.scss';
import classNames from 'classnames';

function LikeOrNo({ likeCount, disLikeCount, changeCount, classNmae }) {
    console.log("class: ", s);
    return (
        <>
            <div className={classNames(classNmae)}>
                <span className={s.like_text}>
                    <LikeTwoTone style={{ fontSize: '26px', color: 'aliceblue', left: 0 }} onClick={() => changeCount(1)} /> {likeCount}</span>
                <span className={s.like_text}>
                    <DislikeTwoTone style={{ fontSize: '26px', color: 'aliceblue', left: 0 }} onClick={() => changeCount(1)} /> {disLikeCount}</span>
            </div>

        </>
    );
};

export default LikeOrNo;
