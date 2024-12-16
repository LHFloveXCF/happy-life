import { DislikeTwoTone, EyeOutlined, LikeTwoTone } from '@ant-design/icons';
import s from './index.module.scss';
import classNames from 'classnames';
import styles from './s_likeAndUnLike';

function LikeOrNo({ likeCount, disLikeCount, changeCount, classNmae, articleId }) {
    return (
        <>
            <div className={classNames(classNmae)}>
                <span className={s.like_text}>
                    <LikeTwoTone style={styles.c_c_home_like} onClick={() => changeCount(1, articleId)} />
                    {likeCount > 0 ? likeCount : ""}
                </span>
                <span className={s.like_text}>
                    <EyeOutlined style={styles.c_c_home_like} onClick={() => changeCount(2, articleId)} /> {disLikeCount > 0 ? disLikeCount : ""}</span>
            </div>

        </>
    );
};

export default LikeOrNo;
