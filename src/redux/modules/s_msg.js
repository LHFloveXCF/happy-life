import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const msgStore = createSlice({
    name: 's_msg',
    initialState: {
    },

    reducers: {
        setNavShow(state, action) {
            console.log("setNavShow", action.payload);
            state.navShow = action.payload;
        }

    }

})

const saveMsg = (content) => {
    const data = {
        content: content
    }
    return async (dispatch) => {
        const res = await axios.post('http://localhost:18140/api/saveMsg', data)
        console.log(res);
    }
}

export { saveMsg }


const s_msg = msgStore.reducer
export default s_msg