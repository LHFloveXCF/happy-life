import {configureStore} from '@reduxjs/toolkit'
import navShow from './modules/nav_show'
import s_home from './modules/s_home'

const store = configureStore({
   reducer : {
        navShow: navShow,
        s_home: s_home
    }
})

export default store