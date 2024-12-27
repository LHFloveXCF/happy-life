
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
                "avatar": "1",
                "content": "content-mid",
                "userName": "content-mid",
                "userId": 1,
                "time": 0,
                "replay": [
                    {
                        "avatar": "1",
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
                let say = {
                    "avatar": element.user_avatar,
                    "content": element.content,
                    "userName": element.user_name,
                    "userId": element.user_id,
                    "time": element.time,
                    "replay": []
                };
                result.push(say);
            });
            return {
                ...state,
                say: result,
            };
        },
        addSay: (state, action) => {
            const result = [].concat(state.say);
            let element = action.payload;

            let say = {
                "avatar": element.avatar,
                "content": element.content,
                "userName": element.userId,
                "userId": element.userId,
                "time": element.time,
                "replay": []
            };
            result.push(say);
            console.log("variableName:", result);

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
const addOneSay = (say) => {
    return dispatch => {
        common.fetchPost(url_save_say, say, json => {
            dispatch(addSay(say))
        }, {}, dispatch)
    }
};
const getSay = () => {    
    return dispatch => {
        common.fetchGet(url_get_say, {}, json => {
            dispatch(setSay(json.data))
        }, {}, dispatch)
    }
};

export { addOneSay, getSay };
const r_c_say = sayStore.reducer

export default r_c_say