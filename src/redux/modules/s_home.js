import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';


const homeStore = createSlice({
    name: 's_home',
    initialState: {
        data: [],
        user_info: {},
        article_info_list: [
            {
                "id": 1,
                "title": '这是一个标题',
                "content": '## 这是一个标题\n\n这是一个段落。Markdown是一种轻量级标记语言，允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的HTML。\n\n- 列表项1\n- 列表项2\n  - 子列表项\n\n[这是一个链接](https://www.example.com)\n\n',
                "date": dayjs(new Date()).toISOString(),
                "tags": [
                    "test",
                    "good"
                ],
                "like": 0,
                "disLike": 0
            }
        ],
    },

    reducers: {
        setUserId: (state, action) => {
            return {
                ...state,
                user_info: {
                    ...state.user_info,
                    user_id: action.payload
                }
            };
        },

        setUserUserAvatar: (state, action) => {
            return {
                ...state,
                user_info: {
                    ...state.user_info,
                    user_avatar: action.payload
                }
            };
        },

        setArticleLikeCount: (state, action) => {
            const { id, type } = action.payload;
            const updatedArticleInfoList = state.article_info_list.map(article => {
                if (article.id === id) {
                    switch (type) {
                        case 1: // 点赞
                            return { ...article, like: article.like + 1 };
                        case 2: // 吐槽
                            return { ...article, disLike: article.disLike + 1 };
                    }

                }
                return article;
            });

            return {
                ...state,
                article_info_list: updatedArticleInfoList,
            };
        }
    }

})

// 结构出action
const { setUserId, setUserUserAvatar, setArticleLikeCount } = homeStore.actions;

// 暴露出对应的方法
const updateUserId = (user_id) => {
    return (dispatch) => {
        dispatch(setUserId(user_id))
    }
};

const updateUserAvatar = (avatar) => {
    return (dispatch) => {
        dispatch(setUserUserAvatar(avatar))
    }
};

const updateArticleLikeCount = (likeAdd) => {
    return (dispatch) => {
        dispatch(setArticleLikeCount(likeAdd))
    }
};



export { updateUserId, updateUserAvatar, updateArticleLikeCount };


const s_home = homeStore.reducer

export default s_home