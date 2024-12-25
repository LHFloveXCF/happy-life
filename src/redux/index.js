import { configureStore } from '@reduxjs/toolkit';
import s_nav from './modules/s_nav';
import r_c_home from './modules/r_c_home';
import s_msg from './modules/s_msg';
import r_b_home from './modules/r_b_home';
import r_c_say from './modules/r_c_say';

const store = configureStore({
    reducer: {
        s_nav: s_nav,
        r_c_home: r_c_home,
        s_msg: s_msg,
        r_b_home: r_b_home,
        r_c_say: r_c_say,
    }
})

export default store