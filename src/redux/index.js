import {configureStore} from '@reduxjs/toolkit'
import navShow from './modules/nav_show'

const store = configureStore({
   reducer : {
        navShow: navShow
    }
})

export default store