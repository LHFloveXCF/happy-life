import { DislikeTwoTone, LikeTwoTone } from '@ant-design/icons';
import s from './index.module.scss';
import classNames from 'classnames';
import styles from './s_likeAndUnLike';

function LikeOrNo({ likeCount, disLikeCount, changeCount, classNmae, articleId }) {
    return (
        <>
            <div className={classNames(classNmae)}>
                <span className={s.like_text}>
                    <LikeTwoTone style={styles.c_c_home_like} onClick={() => changeCount(1, articleId)} /> {likeCount}</span>
                <span className={s.like_text}>
                    <DislikeTwoTone style={styles.c_c_home_like} onClick={() => changeCount(2, articleId)} /> {disLikeCount}</span>
            </div>

        </>
    );
};

export default LikeOrNo;
