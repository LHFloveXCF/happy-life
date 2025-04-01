import * as common from '@/utils/common';
import { 
  url_get_wrong_questions,
  url_add_wrong_question,
  url_update_wrong_question_mastery,
  url_delete_wrong_question
} from '@/utils/constant_api';
import { createSlice } from '@reduxjs/toolkit';

const wrongQuestionsStore = createSlice({
    name: 'r_c_wrong_questions',
    initialState: {
        data: {},
        loading: false
    },

    reducers: {
        setWrongQuestions: (state, action) => {
            return {
                ...state,
                data: action.payload
            };
        },
        setLoading: (state, action) => {
            return {
                ...state,
                loading: action.payload
            };
        },
        addWrongQuestion: (state, action) => {
            const { category, question } = action.payload;
            return {
                ...state,
                data: {
                    ...state.data,
                    [category]: [...(state.data[category] || []), question]
                }
            };
        },
        updateWrongQuestionMastery: (state, action) => {
            const { category, id, mastery } = action.payload;
            return {
                ...state,
                data: {
                    ...state.data,
                    [category]: state.data[category].map(item => 
                        item.id === id ? { ...item, mastery } : item
                    )
                }
            };
        },
        deleteWrongQuestion: (state, action) => {
            const { category, id } = action.payload;
            return {
                ...state,
                data: {
                    ...state.data,
                    [category]: state.data[category].filter(item => item.id !== id)
                }
            };
        }
    }
})

// 结构出action
const { 
    setWrongQuestions, 
    setLoading,
    addWrongQuestion,
    updateWrongQuestionMastery,
    deleteWrongQuestion
} = wrongQuestionsStore.actions;

// 暴露出对应的方法
const getWrongQuestions = () => {
    return dispatch => {
        dispatch(setLoading(true));
        common.fetchGet(url_get_wrong_questions, {}, json => {
            dispatch(setWrongQuestions(json.data));
            dispatch(setLoading(false));
        }, {}, dispatch);
    };
};

const addNewWrongQuestion = (questionData) => {
    return dispatch => {
        common.fetchPost(url_add_wrong_question, questionData, json => {
            dispatch(addWrongQuestion(json.data));
        }, {}, dispatch);
    };
};

const updateQuestionMastery = (updateData) => {
    return dispatch => {
        common.fetchPost(url_update_wrong_question_mastery, updateData, json => {
            dispatch(updateWrongQuestionMastery(json.data));
        }, {}, dispatch);
    };
};

const removeWrongQuestion = (deleteData) => {
    return dispatch => {
        common.fetchPost(url_delete_wrong_question, deleteData, json => {
            dispatch(deleteWrongQuestion(json.data));
        }, {}, dispatch);
    };
};

export { 
    getWrongQuestions, 
    addNewWrongQuestion, 
    updateQuestionMastery, 
    removeWrongQuestion 
};

const r_c_wrong_questions = wrongQuestionsStore.reducer;
export default r_c_wrong_questions;
