import { url_save_msg } from '@/utils/constant_api';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const backHomeStore = createSlice({
    name: 's_b_home',
    initialState: {
        msgs: [],
        signState: 1,
    },

    reducers: {
        setMsgs(state, action) {
            state.msgs = action.payload;
        },
        setSignState(state, action) {
            state.signState = action.payload;
        }

    }

});

const {setSignState } = backHomeStore.actions

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

export { saveMsg, updateSignState };


const s_b_home = backHomeStore.reducer
export default s_b_home