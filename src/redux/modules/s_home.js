
import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import * as common from '@/utils/common';
import { url_get_article, url_upload } from '@/utils/constant_api';


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
                "disLike": 0,
                "icon":""
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
        },

        setArticleList: (state, action) => {
            const result = [];
            action.payload.forEach(element => {
                let article = {
                    "id": element.id,
                    "title": element.article_title,
                    "userId": element.user_id,
                    "content": element.article_content,
                    "date": dayjs(new Date()).toISOString(),
                    "tags": [
                        element.article_keys
                    ],
                    "like": 0,
                    "disLike": 0,
                    "icon": element.article_icon
                };
                result.push(article);
            });            
            return {
                ...state,
                article_info_list: result,
            };
        },
        setDataCurPage: (state, action) => {
            return {
                ...state,
                data: {
                    ...state.data,
                    current: action.payload
                }
            };
        },
    }

})

// 结构出action
const { setUserId, setUserUserAvatar, setArticleLikeCount, setArticleList, setDataCurPage } = homeStore.actions;

// 暴露出对应的方法
const getArticleList = () => {
    return dispatch => {
        common.fetchGet(url_get_article, {}, json => {
            dispatch(setArticleList(json.data))
        }, {}, dispatch)
    }
};


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

const updateCurrentPage = (cur_page) => {
    return (dispatch) => {
        dispatch(setDataCurPage(cur_page))
    }
};



export { updateArticleLikeCount, updateUserAvatar, updateUserId, getArticleList, updateCurrentPage };


const s_home = homeStore.reducer

export default s_home