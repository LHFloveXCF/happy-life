import LoginC from "@/components/Login";
import Layout from "@/components/Layout";
import { nav_title } from "@/utils/constant_nav";

import s from './index.module.scss'

function Login() {
    return (
        <>
            <Layout title={nav_title.LOGIN} classes={s.login_p} isPost={true}>
                <LoginC />
            </Layout>

        </>
    );
};
export default Login;