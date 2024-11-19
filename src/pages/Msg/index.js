import Layout from "@/components/Layout";
import MsgInfo from "./MsgInfo";
import { nav_title } from "@/utils/constant_nav";

function Msg() {
    return (
        <>
            <Layout title={nav_title.MSG}>
                <MsgInfo />
            </Layout>
        </>
    )
}

export default Msg;