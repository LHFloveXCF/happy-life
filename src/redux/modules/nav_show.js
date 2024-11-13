import { createSlice } from '@reduxjs/toolkit'

const navShowStore = createSlice({
    name: 'navShow',
    initialState: {
        navShow: true,
        mode: {}
    },

    reducers: {

    }

})


const navShow = navShowStore.reducer
export default navShow