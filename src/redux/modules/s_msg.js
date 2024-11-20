import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const msgStore = createSlice({
    name: 's_msg',
    initialState: {
        msgs: [],
    },

    reducers: {
        setMsgs(state, action) {
            console.log("setMsgs", action.payload);
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
        const res = await axios.post('http://localhost:18141/api/saveMsg', data)
        console.log(res);
    }
};

const getMsgs = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:18141/api/getMsg')
        dispatch(setMsgs(res.data.data))
    }
};

export { saveMsg, getMsgs }


const s_msg = msgStore.reducer
export default s_msg