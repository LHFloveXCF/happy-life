import { url_delete_article, url_get_article, url_save_msg } from '@/utils/constant_api';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as common from '@/utils/common';
import dayjs from 'dayjs';

const backHomeStore = createSlice({
    name: 'r_b_home',
    initialState: {
        msgs: [],
        signState: 1,
        article_info_list: [],
    },

    reducers: {
        setMsgs(state, action) {
            state.msgs = action.payload;
        },
        setSignState(state, action) {
            state.signState = action.payload;
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
                    "icon": element.article_icon,
                    "time": element.article_time
                };
                result.push(article);
            });            
            return {
                ...state,
                article_info_list: result,
            };
        },

        deleteOneArticle: (state, action) => {
            let result = [...state.article_info_list];
            result = result.filter(item => item.id !== action.payload);
            return {
                ...state,
                article_info_list: result,
            }
        },

    }

});

const {setSignState, setArticleList, deleteOneArticle } = backHomeStore.actions

const saveMsg = (content) => {
    const data = {
        content: content
    }
    return async (dispatch) => {
        await axios.post(url_save_msg, data)
    }
};
const updateSignState = (state) => {
    return (dispatch) => {
        dispatch(setSignState(state))
    }
};
// 删除文章
const deleteArticle = (article, callBack) => {
    return (dispatch) => {
        common.fetchPost(url_delete_article, {id: article.id}, json => {
            dispatch(deleteOneArticle(article.id));
            callBack(json);
        }, {}, dispatch);
    };
};
// 后台获取文章列表
const getBackArticleList = () => {
    return dispatch => {
        common.fetchGet(url_get_article, {}, json => {
            dispatch(setArticleList(json.data))
        }, {}, dispatch)
    }
};

export { saveMsg, updateSignState, deleteArticle, getBackArticleList };


const r_b_home = backHomeStore.reducer
export default r_b_home