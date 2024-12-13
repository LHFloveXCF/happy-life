import { url_delete_article, url_delete_image, url_delete_role, url_delete_user, url_get_article, url_get_image, url_get_role, url_get_user, url_save_msg, url_save_role, url_update_role } from '@/utils/constant_api';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as common from '@/utils/common';
import dayjs from 'dayjs';

const backHomeStore = createSlice({
    name: 'r_b_home',
    initialState: {
        msgs: [],
        signState: 1,
        article_info_list: [],
        image_list: [],
        image_cur: {}, // 查看图片内容
        user_list: [], // 用户列表
        role_list: [], // 角色列表

    },

    reducers: {
        setMsgs(state, action) {
            state.msgs = action.payload;
        },
        setSignState(state, action) {
            state.signState = action.payload;
        },
        setArticleList: (state, action) => {
            const result = [];
            action.payload.forEach(element => {
                let article = {
                    "id": element.id,
                    "title": element.article_title,
                    "userId": element.user_id,
                    "content": element.article_content,
                    "date": dayjs(new Date()).toISOString(),
                    "tags": [
                        element.article_keys
                    ],
                    "like": 0,
                    "disLike": 0,
                    "icon": element.article_icon,
                    "time": element.article_time
                };
                result.push(article);
            });            
            return {
                ...state,
                article_info_list: result,
            };
        },

        deleteOneArticle: (state, action) => {
            let result = [...state.article_info_list];
            result = result.filter(item => item.id !== action.payload);
            return {
                ...state,
                article_info_list: result,
            }
        },
        setImageList: (state, action) => {
            const result = [];
            action.payload.forEach(element => {
                let iamge = {
                    "id": element.file_id,
                    "MD5": element.file_md5,
                    "path": element.file_path,
                };
                result.push(iamge);
            });            
            console.log("result:", result);

            return {
                ...state,
                image_list: result,
            };
        },
        deleteOneImage: (state, action) => {
            let result = [...state.image_list];
            result = result.filter(item => item.id !== action.payload);
            return {
                ...state,
                image_list: result,
            }
        },
        setCurImage: (state, action) => {
            return {
                ...state,
                image_cur: action.payload,
            }
        },
        setUserList: (state, action) => {
            const result = [];
            action.payload.forEach(element => {
                let user = {
                    "id": element.user_id,
                    "name": element.user_name,
                    "email": element.user_email,
                };
                result.push(user);
            });            
            return {
                ...state,
                user_list: result,
            };
        },
        deleteOneUser: (state, action) => {
            let result = [...state.user_list];
            result = result.filter(item => item.id !== action.payload);
            return {
                ...state,
                user_list: result,
            }
        },
        setRoleList: (state, action) => {
            const result = [];
            action.payload.forEach(element => {
                let role = {
                    "id": element.id,
                    "roleId": element.role_id,
                    "name": element.role_name,
                    "desc": element.role_desc,
                };
                result.push(role);
            });            
            return {
                ...state,
                role_list: result,
            };
        },
        deleteOneRole: (state, action) => {
            let result = [...state.role_list];
            result = result.filter(item => item.id !== action.payload);
            return {
                ...state,
                role_list: result,
            }
        },
        updateOneRole: (state, action) => {
            let result = [...state.role_list];
            result = result.filter(item => item.id !== action.payload.id);
            result.push(action.payload);
            return {
                ...state,
                role_list: result,
            }
        },
        addOneRole: (state, action) => {
            let result = [...state.role_list];
            const element = action.payload;
            let role = {
                "id": element.id,
                "roleId": element.roleId,
                "name": element.name,
                "desc": element.desc,
            };
            
            result.push(role);
            return {
                ...state,
                role_list: result,
            }
        },
    }

});

const {setSignState, setArticleList, deleteOneArticle, setImageList, deleteOneImage, setCurImage, setUserList, deleteOneUser, setRoleList, deleteOneRole, updateOneRole, addOneRole } = backHomeStore.actions

const saveMsg = (content) => {
    const data = {
        content: content
    }
    return async (dispatch) => {
        await axios.post(url_save_msg, data)
    }
};
const updateSignState = (state) => {
    return (dispatch) => {
        dispatch(setSignState(state))
    }
};
// 删除文章
const deleteArticle = (article, callBack) => {
    return (dispatch) => {
        common.fetchPost(url_delete_article, {id: article.id}, json => {
            dispatch(deleteOneArticle(article.id));
            callBack(json);
        }, {}, dispatch);
    };
};
// 后台获取文章列表
const getBackArticleList = () => {
    return dispatch => {
        common.fetchGet(url_get_article, {}, json => {
            dispatch(setArticleList(json.data))
        }, {}, dispatch)
    }
};
// 后台获取图片列表
const getBackImageList = () => {
    return dispatch => {
        common.fetchGet(url_get_image, {}, json => {
            
            dispatch(setImageList(json.data))
        }, {}, dispatch)
    }
};
// 删除文章
const deleteImage = (image, callBack) => {
    return (dispatch) => {
        common.fetchPost(url_delete_image, {id: image.id}, json => {
            dispatch(deleteOneImage(image.id));
            callBack(json);
        }, {}, dispatch);
    };
};
// 查看照片
const showImage = (image) => {
    return (dispatch) => {
        dispatch(setCurImage(image));
    };
};
// 后台获取用户列表
const getBackUserList = () => {
    return dispatch => {
        common.fetchGet(url_get_user, {}, json => {
            dispatch(setUserList(json.data))
        }, {}, dispatch)
    }
};
// 后台删除用户
const deleteUser = (user) => {
    return dispatch => {
        common.fetchPost(url_delete_user, {id: user.id}, json => {
            dispatch(deleteOneUser(user.id))
        }, {}, dispatch)
    }
};
// 后台获取角色列表
const getBackRoleList = () => {
    return dispatch => {
        common.fetchGet(url_get_role, {}, json => {
            dispatch(setRoleList(json.data))
        }, {}, dispatch)
    }
};
// 后台删除角色
const deleteRole = (role) => {
    return dispatch => {
        common.fetchPost(url_delete_role, {id: role.id}, json => {
            dispatch(deleteOneRole(role.id))
        }, {}, dispatch)
    }
};
// 后台修改角色
const updateRole = (role) => {
    return dispatch => {
        common.fetchPost(url_update_role, {roleId: role.roleId, name: role.name, desc: role.desc, id: role.id}, json => {
            dispatch(updateOneRole(role))
        }, {}, dispatch)
    }
};
// 后台增加角色
const addRole = (role) => {
    return dispatch => {
        common.fetchPost(url_save_role, {roleId: role.roleId, name: role.name, desc: role.desc}, json => {            
            dispatch(addOneRole({
                ...role,
                id: json.data.insertId
            }))
        }, {}, dispatch)
    }
};

export { saveMsg, updateSignState, deleteArticle, getBackArticleList, getBackImageList, deleteImage, showImage, getBackUserList, deleteUser, getBackRoleList, deleteRole, updateRole, addRole };


const r_b_home = backHomeStore.reducer
export default r_b_home