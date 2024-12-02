import * as common from '@/utils/common';
import { url_get_msg, url_save_msg } from '@/utils/constant_api';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const backHomeStore = createSlice({
    name: 's_b_home',
    initialState: {
        msgs: [],
    },

    reducers: {
        setMsgs(state, action) {
            state.msgs = action.payload;
        }

    }

});

const { setMsgs } = backHomeStore.actions

const saveMsg = (content) => {
    const data = {
        content: content
    }
    return async (dispatch) => {
        await axios.post(url_save_msg, data)
    }
};

export { saveMsg };


const s_b_home = backHomeStore.reducer
export default s_b_home