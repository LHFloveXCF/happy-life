import { createSlice } from '@reduxjs/toolkit';


const homeStore = createSlice({
    name: 's_home',
    initialState: {
        data: [],
        user_info: {},
    },

    reducers: {
        setUserId: (state, action) => {
            return {
                ...state,
                user_info: {
                    ...state.user_info,
                    user_id: action.payload
                }
            };
        }

    }

})

// 结构出action
const {setUserId} = homeStore.actions;

// 暴露出对应的方法
const updateUserId = (user_id) => {
    return (dispatch) => {
        dispatch(setUserId(user_id))
    }
}

export { updateUserId };


const s_home = homeStore.reducer

export default s_home