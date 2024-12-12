import { configureStore } from '@reduxjs/toolkit';
import s_nav from './modules/s_nav';
import s_home from './modules/s_home';
import s_msg from './modules/s_msg';
import r_b_home from './modules/r_b_home';

const store = configureStore({
    reducer: {
        s_nav: s_nav,
        s_home: s_home,
        s_msg: s_msg,
        r_b_home: r_b_home,
    }
})

export default store