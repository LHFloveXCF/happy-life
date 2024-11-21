import * as common from '@/utils/common';
import { url_get_msg, url_save_msg } from '@/utils/constant_api';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
    return dispatch => {
        common.fetchGet(url_get_msg, {}, json => {
            dispatch(setMsgs(json.data))
        }, {}, dispatch)
    }
};

export { getMsgs, saveMsg };


const s_msg = msgStore.reducer
export default s_msg