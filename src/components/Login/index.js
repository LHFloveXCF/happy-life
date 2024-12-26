import { updateIsAuth, updateUserRealId } from '@/redux/modules/r_c_home';
import { actionFailure, actionSuccess } from '@/redux/modules/r_global';
import { useAuth } from '@/utils/auth';
import * as common from '@/utils/common';
import { url_login_back } from '@/utils/constant_api';
import { auth_enum } from '@/utils/constant_auth';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

function LoginC() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { login  } = useAuth();
    const homeState = useSelector(state => state.r_c_home);
    const onFinish = (values) => {
        // 登录验证
        let params = {
            userName: values.username,
            passWord: values.password,
        }
        let extraTools = {
            actionFailure: actionFailure,
            actionSuccess: actionSuccess
        }
        common.fetchPost(url_login_back, params, res => {            
            if (res.data) {
                const user = res.data;
                login();
                if (user.roleId === auth_enum.admin) {
                    navigate("/");
                } else {
                    navigate("/");
                }
                dispatch(updateUserRealId(user.userId));
                dispatch(updateIsAuth(true))
            };
        }, extraTools, dispatch);
    };
    return (
        <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Flex justify="space-between" align="center">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a href="">Forgot password</a>
                </Flex>
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    登 录
                </Button>
                or <NavLink to={"/register"}>Register now!</NavLink>
            </Form.Item>
        </Form>
    )
};

export default LoginC;

