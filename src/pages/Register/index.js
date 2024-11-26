import Register from "@/components/Login/register";
import Layout from "@/components/Layout";
import { nav_title } from "@/utils/constant_nav";

import s from './index.module.scss'

function Login() {
    return (
        <>
            <Layout title={nav_title.REGISTER} classes={s.register_p} isPost={true}>
                <Register />
            </Layout>

        </>
    );
};
export default Login;