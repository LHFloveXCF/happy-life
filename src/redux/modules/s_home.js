import { createSlice } from '@reduxjs/toolkit'

const homeStore = createSlice({
    name: 's_home',
    initialState: {
        data: []
    },

    reducers: {

    }

})


const s_home = homeStore.reducer

export default s_home