import { cur_view } from '@/utils/constant';
import { createSlice } from '@reduxjs/toolkit'

const navShowStore = createSlice({
    name: 's_nav',
    initialState: {
        navShow: true,
        mode: 1,
        curView: cur_view.CLIENT,
        footerShow: true
    },

    reducers: {
        setNavShow(state, action) {
            state.navShow = action.payload;
        },

        changeMode(state, action) {
            state.mode = action.payload;
        },

        changeView(state, action) {
            state.curView = action.payload;
        },
        changeFooterShow(state, action) {
            state.navShow = action.payload;
        },

    }

})

const { setNavShow, changeMode, changeView, changeFooterShow } = navShowStore.actions

export { setNavShow, changeMode, changeView, changeFooterShow }


const s_nav = navShowStore.reducer
export default s_nav