import { configureStore } from '@reduxjs/toolkit';
import s_nav from './modules/s_nav';
import s_home from './modules/s_home';
import s_msg from './modules/s_msg';
import s_b_home from './modules/s_b_home';

const store = configureStore({
    reducer: {
        s_nav: s_nav,
        s_home: s_home,
        s_msg: s_msg,
        s_b_home: s_b_home,
    }
})

export default store