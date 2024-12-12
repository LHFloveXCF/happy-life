import { url_delete_article, url_delete_image, url_get_article, url_get_image, url_save_msg } from '@/utils/constant_api';
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
        image_list: [],
        user_list: [], // 用户列表
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
        setImageList: (state, action) => {
            const result = [];
            action.payload.forEach(element => {
                let iamge = {
                    "id": element.file_id,
                    "MD5": element.file_md5,
                    "path": element.file_path,
                };
                result.push(iamge);
            });            
            console.log("result:", result);

            return {
                ...state,
                image_list: result,
            };
        },
        deleteOneImage: (state, action) => {
            let result = [...state.image_list];
            result = result.filter(item => item.id !== action.payload);
            return {
                ...state,
                image_list: result,
            }
        },

    }

});

const {setSignState, setArticleList, deleteOneArticle, setImageList, deleteOneImage } = backHomeStore.actions

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
// 后台获取图片列表
const getBackImageList = () => {
    return dispatch => {
        common.fetchGet(url_get_image, {}, json => {
            
            dispatch(setImageList(json.data))
        }, {}, dispatch)
    }
};
// 删除文章
const deleteImage = (image, callBack) => {
    return (dispatch) => {
        common.fetchPost(url_delete_image, {id: image.id}, json => {
            dispatch(deleteOneImage(image.id));
            callBack(json);
        }, {}, dispatch);
    };
};

export { saveMsg, updateSignState, deleteArticle, getBackArticleList, getBackImageList, deleteImage };


const r_b_home = backHomeStore.reducer
export default r_b_home