import { createSlice } from '@reduxjs/toolkit'

const navShowStore = createSlice({
    name: 's_nav',
    initialState: {
        navShow: true,
        mode: 1,
    },

    reducers: {
        setNavShow(state, action) {
            state.navShow = action.payload;
        },

        changeMode(state, action) {
            state.mode = action.payload;
        }

    }

})

const { setNavShow, changeMode } = navShowStore.actions

export {setNavShow, changeMode}


const s_nav = navShowStore.reducer
export default s_nav