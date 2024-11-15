import { createSlice } from '@reduxjs/toolkit';
import '@/utils/common';
import axios from 'axios';

import {server_host} from '@/utils/constant';

const homeStore = createSlice({
    name: 's_home',
    initialState: {
        data: []
    },

    reducers: {

    }

})


const getTestData = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:18140/api/test')        
        console.log(res);
        
    }
}

export {getTestData}


const s_home = homeStore.reducer

export default s_home