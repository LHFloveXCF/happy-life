import { url_get_msg, url_save_msg } from '@/utils/constant_api';
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import * as common from '@/utils/common';
import { json } from 'react-router-dom';

const msgStore = createSlice({
    name: 's_msg',
    initialState: {
        msgs: [],
    },

    reducers: {
        setMsgs(state, action) {
            state.msgs = action.payload;
        }

    }

});

const { setMsgs } = msgStore.actions

const saveMsg = (content) => {
    const data = {
        content: content
    }
    return async (dispatch) => {
        await axios.post(url_save_msg, data)
    }
};

const getMsgs = () => {
    console.log("getMsgs: ");
    
    return dispatch => {
        common.fetchGet(url_get_msg, {}, json => {
            console.log("res: ", json);
            dispatch(setMsgs(json.data))
        }, {}, dispatch)
    }
};

export { saveMsg, getMsgs }


const s_msg = msgStore.reducer
export default s_msg