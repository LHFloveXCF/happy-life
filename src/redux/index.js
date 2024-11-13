import { configureStore } from '@reduxjs/toolkit'
import s_nav from './modules/s_nav'
import s_home from './modules/s_home'

const store = configureStore({
    reducer: {
        s_nav: s_nav,
        s_home: s_home
    }
})

export default store