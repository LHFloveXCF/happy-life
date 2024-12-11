import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

const globalStore = createSlice({
    name: 'r_global',
    initialState: {
    },

    reducers: {
    }

});

const actionSuccess = (msgs) => {
    return (dispatch) => {
        message.info(msgs);
    }
};

const actionFailure = (msgs) => {
    return (dispatch) => {
        message.info(msgs);
    }
};

export { actionFailure, actionSuccess };


const r_global = globalStore.reducer
export default r_global