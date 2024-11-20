import { url_get_msg, url_save_msg } from '@/utils/constant_api';
import { createSlice } from '@reduxjs/toolkit'
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
    return async (dispatch) => {
        const res = await axios.get(url_get_msg)        
        dispatch(setMsgs(res.data.data))
    }
};

export { saveMsg, getMsgs }


const s_msg = msgStore.reducer
export default s_msg