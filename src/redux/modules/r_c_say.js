
import * as common from '@/utils/common';
import { imgUrlPrefix } from '@/utils/constant';
import { url_get_article_msg, url_get_say, url_save_article_msg, url_save_say } from '@/utils/constant_api';
import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';


const sayStore = createSlice({
    name: 'r_c_say',
    initialState: {
        say: [
            {
                "img": `${imgUrlPrefix}1733380822066.webp`,
                "content": "content-mid",
                "userName": "content-mid",
                "userId": 1,
                "replay": [
                    {
                        "img": `${imgUrlPrefix}1733380822066.webp`,
                        "content": "content-mid",
                        "userName": "content-mid",
                    }
                ],
            }
        ],
    },

    reducers: {
        setSay: (state, action) => {
            const result = [];
            action.payload.forEach(element => {
                let articleMsg = {
                    "img": element.id,
                    "content": element.article_id,
                    "userName": element.msg_from,
                    "userId": element.msg_from,
                };
                result.push(articleMsg);
            });
            return {
                ...state,
                say: result,
            };
        },
        addSay: (state, action) => {
            const result = [].concat(state.article_msg);
            let element = action.payload;
            let articleMsg = {
                "img": element.id,
                "content": element.article_id,
                "userName": element.msg_from,
                "userId": element.msg_from,
            };
            result.push(articleMsg);
            return {
                ...state,
                say: result,
            };
        },
    }

})

// 结构出action
const { setSay, addSay } = sayStore.actions;

// 暴露出对应的方法
const addOneSay = (articleId, content, userId, toUserId) => {
    return dispatch => {
        common.fetchPost(url_save_say, { articleId: articleId, content: content, userId: userId, toUserId: toUserId }, json => {
            dispatch(addSay(json.data))
        }, {}, dispatch)
    }
};
const getSay = (articleId) => {
    return dispatch => {
        common.fetchGet(url_get_say, { data: common.jsonStringify({ articleId: articleId }) }, json => {
            dispatch(setSay(json.data))
        }, {}, dispatch)
    }
};

export { addOneSay, getSay };
const r_c_say = sayStore.reducer

export default r_c_say