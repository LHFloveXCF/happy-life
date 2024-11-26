import LoginC from "@/components/Login";
import Layout from "@/components/Layout";
import { nav_title } from "@/utils/constant_nav";

function Login() {
    return (
        <>
            <Layout title={nav_title.LOGIN} isPost={true}>
                <LoginC />
            </Layout>

        </>
    );
};
export default Login;