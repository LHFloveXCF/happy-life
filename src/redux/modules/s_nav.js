import { createSlice } from '@reduxjs/toolkit'

const navShowStore = createSlice({
    name: 's_nav',
    initialState: {
        navShow: true,
        mode: 0,
    },

    reducers: {
        setNavShow(state, action) {
            console.log("setNavShow", action.payload);
            state.navShow = action.payload;
        },

        changeMode(state, action) {
            console.log("changeMode", action.payload);
            state.mode = action.payload;
        }

    }

})

const { setNavShow, changeMode } = navShowStore.actions

export {setNavShow, changeMode}


const s_nav = navShowStore.reducer
export default s_nav